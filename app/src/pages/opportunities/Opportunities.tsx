import { useState } from "react";
import ReactJson from "react-json-view";
import { Typography, Container, Paper, Box } from "@mui/material";
import { OpportunitiesFiltersPanel } from "./filters/OpportunitiesFiltersPanel/OpportunitiesFiltersPanel.tsx";
import { OpportunitiesFilterInput, User } from "../../graphql/graphql.ts";

const Opportunities = () => {
  const data = {
    risk: [1, 2, 3],
    assignedUser: [
      {
        email: "lihi@gmail.com",
      } as User,
    ],
    opportunityType: [
      "Expensive RDS Instance Type",
      "Non-Spot Nodes in a Non-Production Cluster",
    ],
    savings: {
      max: 403.69,
    },
    service: ["EKS", "EC2"],
  };
  const [whereClause, setWhereClause] = useState<OpportunitiesFilterInput>();

  return (
    <div className="text-center flex flex-col gap-6">
      <Typography variant="h4">Opportunities Page</Typography>
      <OpportunitiesFiltersPanel
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
            <ReactJson src={whereClause as Object} theme="monokai" />
          </Paper>
        </Box>
      </Container>
    </div>
  );
};

export default Opportunities;
