import { Typography } from "@mui/material";
import { rootColors } from "../../Utilities/rootColors";

const UnderlinedHeading = ({ children }) => {
    return (
        <Typography
            variant="h6"
            sx={{
                position: 'relative',
                display: 'inline-block',
                color: rootColors.HighlightColor,
                '&::after': {
                    content: '""',
                    position: 'absolute',
                    left: 0,
                    bottom: -2, // Adjust to control spacing
                    width: '100%',
                    height: '2px', // Thickness of the underline
                    backgroundColor: rootColors.HighlightColor,
                    // The underline is always visible, so no transition or scale needed
                },
            }}
        >
            {children}
        </Typography>
    );
};

export default UnderlinedHeading;
