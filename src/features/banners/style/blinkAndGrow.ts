import { keyframes } from "@mui/system";

export const blinkAndGrowStyle = keyframes`
0% {
  visibility: hidden;
  transform: scale(1)
}

4% {
  visibility: hidden;
}

5% {
  visibility: visible;
}

12% {
  visibility: visible;
}

13% {
  visibility: hidden;
}

16% {
  visibility: hidden;
}

17% {
  visibility: visible;
}

24% {
  visibility: visible;
}

25% {
  visibility: hidden;
}

27% {
  visibility: hidden;
}

28% {
  visibility: visible;
}

36% {
  visibility: visible;
}

60% {
  visibility: visible;

}

100% {
  visibility: visible;
}
`;
