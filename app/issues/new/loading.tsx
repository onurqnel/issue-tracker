import { Box, Skeleton } from "@radix-ui/themes";

const LoadingNewIssuePage = () => {
  return (
    <Box className="max-w-xl space-y-3">
      <Skeleton height="2rem" />
      <Skeleton height="20rem" />
      <Skeleton width="8rem" height="2rem" />
    </Box>
  );
};

export default LoadingNewIssuePage;
