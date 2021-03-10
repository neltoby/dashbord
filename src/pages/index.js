import React, { lazy } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const CssBaseline = lazy(() => import("@material-ui/core/CssBaseline"));
// const Typography = lazy(() => import("@material-ui/core/Typography"));
const ResponsiveDrawer = lazy(() => import("../component/responsiveDrawer"));
const CardContainer = lazy(() => import("../component/cards"));
const Header = lazy(() => import("../component/header"));
const GraphHeader = lazy(() => import("../component/graphHeader"));
const Graph = lazy(() => import("../component/graph"));
const DisplayContent = lazy(() => import("../component/contents"));

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: "100vw",
  },
  content: {
    padding: theme.spacing(3),
    backgroundColor: "#fff",
    [theme.breakpoints.down("md")]: {
      width: "100vw",
    },
    [theme.breakpoints.up("md")]: {
      width: "85%",
    },
  },
  overview: {
    fontWeight: "bold",
    color: "#666",
    marginBottom: theme.spacing(3),
  },
}));

const arr = [
  {
    title: "Registered companies",
    count: 849,
    percent: 525,
    direction: true,
    duration: "Since last week",
    color: "#fdece2",
  },
  {
    title: "New application",
    count: 508,
    percent: 123,
    direction: false,
    duration: "Since last week",
    color: "#eaeffd",
  },
  {
    title: "Total project done",
    count: 1043,
    percent: 123,
    direction: false,
    duration: "Since last week",
    color: "#fff3c5",
  },
  {
    title: "New projects",
    count: 38,
    percent: 525,
    direction: true,
    duration: "Since last week",
    color: "#e7f5fe",
  },
];

function Home() {
  const cs = useStyles();
  return (
    <div className={cs.root}>
      <CssBaseline />
      <ResponsiveDrawer />
      <main className={cs.content}>
        <Header />
        <Typography variant="h6" component="h6" className={cs.overview}>
          Overview
        </Typography>
        <CardContainer arr={arr} />
        <GraphHeader />
        <Graph />
        <DisplayContent />
      </main>
    </div>
  );
}

export default Home;
