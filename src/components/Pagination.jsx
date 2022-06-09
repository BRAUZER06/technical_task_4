import React from "react";
import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";

export const pagination = ({ onClickButtonPagination, total, limit }) => {
  const calc = total / limit;

  return (
    <div>
      <Stack>
        <Pagination
          onClick={onClickButtonPagination}
          count={calc}
          variant="outlined"
          shape="rounded"
          color="secondary"
          hidePrevButton
          hideNextButton
        />
      </Stack>
    </div>
  );
};
