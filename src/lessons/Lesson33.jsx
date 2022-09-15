import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import React from "react";

const Lesson33 = () => {
  return (
    <TableContainer component={Paper} sx={{ maxHeight: "300px" }}>
      <Table stickyHeader>
        {/* stickyHeader prop makes the headers sticky if the table is scrollable */}
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Last name</TableCell>
            <TableCell align="center">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.first_name}</TableCell>
              <TableCell>{row.last_name}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Lesson33;

const tableData = [
  {
    id: 1,
    first_name: "Gale",
    last_name: "Ollenbuttel",
    email: "gollenbuttel0@goo.ne.jp",
    gender: "Female",
    ip_address: "60.62.76.123",
  },
  {
    id: 2,
    first_name: "Rebbecca",
    last_name: "Dennerly",
    email: "rdennerly1@shareasale.com",
    gender: "Female",
    ip_address: "18.162.216.104",
  },
  {
    id: 3,
    first_name: "Lock",
    last_name: "Sebring",
    email: "lsebring2@wp.com",
    gender: "Male",
    ip_address: "118.106.25.196",
  },
  {
    id: 4,
    first_name: "Vincents",
    last_name: "Abba",
    email: "vabba3@spiegel.de",
    gender: "Male",
    ip_address: "167.32.34.75",
  },
  {
    id: 5,
    first_name: "Tildi",
    last_name: "Mauchlen",
    email: "tmauchlen4@acquirethisname.com",
    gender: "Female",
    ip_address: "95.6.16.3",
  },
  {
    id: 6,
    first_name: "Thibaut",
    last_name: "Bellee",
    email: "tbellee5@imdb.com",
    gender: "Male",
    ip_address: "51.19.226.121",
  },
  {
    id: 7,
    first_name: "Eirena",
    last_name: "Doncom",
    email: "edoncom6@comcast.net",
    gender: "Female",
    ip_address: "241.104.71.98",
  },
  {
    id: 8,
    first_name: "Derry",
    last_name: "Justun",
    email: "djustun7@freewebs.com",
    gender: "Male",
    ip_address: "86.106.81.159",
  },
  {
    id: 9,
    first_name: "Dan",
    last_name: "Skedge",
    email: "dskedge8@wp.com",
    gender: "Male",
    ip_address: "33.92.79.230",
  },
  {
    id: 10,
    first_name: "Sidonnie",
    last_name: "Garret",
    email: "sgarret9@amazon.co.uk",
    gender: "Female",
    ip_address: "224.55.45.31",
  },
];
