import { useState } from "react";
import { Box, Container, Paper, Typography } from "@mui/material";
import JsonView from "react-json-view";
import { OpportunitiesFilterInput } from "../../graphql/graphql.ts";
import { ResourcesFiltersPanel } from "./filters/ResourcesFiltersPanel/ResourcesFiltersPanel.tsx";

const Resources = () => {
  const data = {
    service: ["EKS", "EC2"],
    monthlySaving: { max: 200 },
  };
  const [whereClause, setWhereClause] = useState<OpportunitiesFilterInput>();

  return (
    <div className="text-center flex flex-col gap-6">
      <div>
        <Typography variant="h4">ResourcePage</Typography>
        <Typography>with URL updates</Typography>
      </div>
      <ResourcesFiltersPanel
        filtersData={data}
        onFilterChange={setWhereClause}
      />
      <Container>
        <Typography variant="h6" gutterBottom>
          Where Clause
        </Typography>
        <Box className="flex justify-center">
          <Paper
            className="text-left w-[600px]"
            elevation={4}
            style={{ padding: "16px", backgroundColor: "rgb(39, 40, 34)" }}
          >
            <JsonView src={whereClause as Object} theme="monokai" />
          </Paper>
        </Box>
      </Container>
    </div>
  );
};

export default Resources;
