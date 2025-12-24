import { deleteOrder, getPaginatedOrders, PaginatedOrdersTable } from "@/entities/order"
import { DataGridDemo } from "@/shared/ui/DataGrid"
import { useEffect, useState } from "react"
import { data, useSearchParams } from "react-router-dom"

export const OrderTableWidget = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const urlPageSize = Number(searchParams.get("size")) || "5"
  const urlPageNumber = Number(searchParams.get("page")) || "0"
  const urlSortField = searchParams.get("sort") || "createdAt"
  const urlDesc = searchParams.get("desc") === "true"

  const [isLoading, setIsLoading] = useState(true)
  const [responseData, setResponseData] = useState(null)
  const [sortModel, setSortModel] = useState([
    { field: urlSortField, sort: urlDesc ? 'desc' : 'asc' }
  ])

  const [pageSize, setPageSize] = useState(Number(urlPageSize))
  const [pageNumber, setPageNumber] = useState(Number(urlPageNumber))
  const [sortField, setSortField] = useState(urlSortField)
  const [isDesc, setIsDesc] = useState(urlDesc)

  useEffect(() => {
    setSearchParams({
      size: pageSize,
      page: pageNumber,
      sort: sortField,
      desc: isDesc
    }, { replace: true })
    getPaginatedOrders({ size: pageSize, page: pageNumber, sortField: sortField, isDesc: isDesc })
      .then(data => {
        setResponseData(data)
        setIsLoading(false)
      })
  }, [pageSize, pageNumber, sortField, isDesc])

  function onPaginationModelChange(newModel) {
    setIsLoading(true)
    setPageSize(newModel.pageSize)
    setPageNumber(newModel.page)
    setSearchParams(prev => {
      prev.set("size", newModel.pageSize)
      prev.set("page", newModel.page)
      return prev
    })
  }

  function onSortModelChange(newModel) {
    setIsLoading(true)
    setSortModel(newModel)
    setSortField(newModel[0].field)
    setIsDesc(newModel[0].sort === 'desc')
    setSearchParams(prev => {
      prev.set("sort", newModel[0].field)
      prev.set("desc", newModel[0].sort === 'desc')
      return prev
    })
  }

  function handleView(id) {
    window.open(`/order/${id}`, '_blank');
  }

  function handleEdit(id) {
    window.open(`/order/${id}/edit`, '_blank');
  }

  function handleDelete(id) {
    const confirm = window.confirm("Are you sure you want to delete this order?")

    if (!confirm) {
      return
    }

    deleteOrder(id).then(response => {
      if (response.status === 204) {
        alert("Order removed")
        setResponseData(prevData => ({
          ...prevData,
          content: prevData.content.filter(entity => entity.id != id),
          totalElements: prevData.totalElements - 1
        }))
      } else {
        alert("Something went wrong. Reload the page and see if the order was deleted.")
      }
    })
  }

  return (
    <div>
      <PaginatedOrdersTable isLoading={isLoading}
        responseData={responseData}
        onPaginationModelChange={onPaginationModelChange}
        sortModel={sortModel}
        onSortModelChange={onSortModelChange}
        handleView={handleView}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </div>
  )
}
