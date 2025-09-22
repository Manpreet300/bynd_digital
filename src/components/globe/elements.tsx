import { styled } from "@mui/material/styles";
import { palettes } from "@/components/themes/palettes";
import { EmptySectionProps } from "./interface";

export const StyledContainer = styled("section")<EmptySectionProps>(({ theme }) => ({
  minHeight: "90vh", // Changed from height to minHeight to allow growth
  height: "auto", // Allow container to adapt to content
  backgroundColor: theme.palette.mode === "light" ? palettes.light : "#333",
  position: "relative",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  padding: theme.spacing(2), // Responsive padding
  boxSizing: "border-box", // Ensure padding doesn't cause overflow

  // Responsive adjustments
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(1),
  },
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(0.5),
  },
  [theme.breakpoints.down("xs")]: {
    minHeight: "80vh", // Slightly smaller for very small screens
  },
}));

export const MarqueeText = styled("div")(({ theme }) => ({
  color: palettes.gray || "#666",
  fontWeight: "bold",
  fontSize: "clamp(2.5rem, 5vw, 6rem)", 
  margin: theme.spacing(0, 5), // Use theme spacing for consistency
  textTransform: "uppercase",
  whiteSpace: "nowrap",
  overflow: "hidden",  
}));