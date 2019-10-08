import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  root: {
    width: "100%"
  },
  tableWrapper: {
    maxHeight: 440,
    overflow: "auto"
  },
  head: {
    backgroundColor: "primary",
    color: "#f2f2f2"
  },
  card: {
    maxWidth: "lg",
    display: "flex",
    margin: 5,
    minWidth: "xs",
    justifyContent: "center"
  },
  media: {
    width: 100,
    height: 100
  },
  details: {
    display: "flex",
    flexDirection: "row"
  },
  button: {
    margin: 5,
    display: "flex",
    minWidth: 100
  },
  content: {
    width: "600",
    justifyContent: "center"
  },
  buttonContainer: {
    justifyContent: "center",
    padding: 20
  },
  textContainer: {
    paddingTop: 20,
    paddingBottom: 20
  },
  mainContainer: {
    justifyContent: "center",
    padding: 20,
    maxWidth: "lg"
  },
  textBox: {
    align: "center",
    textAlign: "center",
    verticalAlign: "center",
    minWidth: 50,
    backgroundColor: "#cccccc",
    marginLeft: 10
  }
});

export default function StickyHeadTable(props) {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const columns = [
    { id: "charity", label: "Charity", minWidth: 100 },
    {
      id: "date",
      label: "Date",
      minWidth: 60,
      align: "right"
    },
    {
      id: "amount",
      label: "Amount",
      minWidth: 80,
      align: "right"
    }
  ];

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  let totalDonations = 0;
  let donationsForYear = 0;
  const date = new Date();
  const year = date.getFullYear().toString();

  const rows = [];

  function createData(charity, date, amount) {
    return { charity, date, amount };
  }

  for (let donation of props.donations) {
    totalDonations += donation.amount_cents;

    let donationDate = new Date(donation.donated_at);

    if (donation.donated_at.substring(0, 4) === year) {
      donationsForYear += donation.amount_cents;
    }
    rows.push(
      createData(
        donation.name,
        donationDate.toDateString(),
        `$${donation.amount_cents / 100}`
      )
    );
  }

  return (
    <Container className="mainContainer">
      <Box className={classes.textContainer}>
        <Typography>Donations This Year: ${donationsForYear / 100}</Typography>
        <Typography>Total Donations: ${totalDonations / 100}</Typography>
      </Box>
      <Divider variant="middle" />
      <Grid container spacing={2} className={classes.buttonContainer}>
        <Button
          className={classes.button}
          variant="contained"
          color="secondary"
          onClick={props.onSearch}
        >
          Search
        </Button>
        <Button
          className={classes.button}
          variant="contained"
          color="secondary"
          onClick={props.onScan}
        >
          Scan
        </Button>
      </Grid>
      <Divider variant="middle" />
      <Typography type="h5" variant="h5">
        Your Donations
      </Typography>

      <Paper className={classes.root}>
        <div className={classes.tableWrapper}>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                {columns.map(column => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map(row => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.code}
                    >
                      {columns.map(column => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </div>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          backIconButtonProps={{
            "aria-label": "previous page"
          }}
          nextIconButtonProps={{
            "aria-label": "next page"
          }}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </Container>
  );
}
