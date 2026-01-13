import { DeleteIcon } from "@/shared/ui/DeleteIcon";
import { EditIcon } from "@/shared/ui/EditIcon";
import { VisibilityIcon } from "@/shared/ui/VisibilityIcon";
import { Label } from "@mui/icons-material";
import { Grid } from "@mui/material";
import { GridActionsCellItem } from "@mui/x-data-grid";

export const paginatedOrdersColumns = ({
  handleEdit,
  handleDelete,
  handleView,
}) => [
  {
    field: "createdAt",
    headerName: "Created at",
    width: 200,
    editable: false,
    sortingOrder: ["asc", "desc"],
    valueGetter: (date) => new Date(date).toLocaleString(),
  },
  {
    field: "burgers",
    headerName: "Burgers",
    flex: 1,
    width: 300,
    sortingOrder: [],
    sortable: false,
    renderCell: (params) => {
      const burgers = params.value ?? [];
      return burgers.map((burger) => burger.name).join(", ");
    },
  },
  {
    field: "totalPrice",
    headerName: "Total price",
    width: 110,
    sortingOrder: ["asc", "desc"],
    valueGetter: (value, row) => {
      const sum = row.burgers.reduce(
        (totalSum, burger) => totalSum + burger.unitPrice,
        0,
      );
      return `${sum.toFixed(2)} UAH`;
    },
  },
  {
    field: "actions",
    headerName: "Actions",
    type: "actions",
    width: 120,
    getActions: (params) => {
      return [
        <GridActionsCellItem
          key={"view"}
          label={"View"}
          icon={<VisibilityIcon />}
          onClick={() => handleView(params.id)}
        />,
        <GridActionsCellItem
          key={"edit"}
          label={"Edit"}
          icon={<EditIcon />}
          onClick={() => handleEdit(params.id)}
        />,
        <GridActionsCellItem
          key={"delete"}
          label={"Delete"}
          icon={<DeleteIcon />}
          onClick={() => handleDelete(params.id)}
        />,
      ];
    },
  },
];
