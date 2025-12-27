import MuiButton from '@mui/material/Button';

export function Button({ label, variatn = "contained", isLoading = false, isDisabled = false, ...others }) {
  return (
    <MuiButton variant={variatn} loading={isLoading} disabled={isDisabled} {...others}>
      {label}
    </MuiButton>
  );
}

