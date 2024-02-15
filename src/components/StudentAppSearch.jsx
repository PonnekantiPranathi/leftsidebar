// StudentAppSearch.jsx
import React, { useState } from 'react';
import {
  Box,
  Typography,
  FormControl,
  Select,
  MenuItem,
  Checkbox,
  ListItemText,
  Button,
  TextField,
  Avatar,
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';


const StudentApplicationsForm = () => {
  const [role, setRole] = useState('');
  const [program, setProgram] = useState([]);
  const [branch, setBranch] = useState([]);
  const [cpi, setCpi] = useState('');
  

  const students = [
    { id: 1, name: 'Praisy', role: 'Software Developer', program: 'BTech', branch: 'Computer Science', cpi: 9.8 },
    { id: 2, name: 'Sindhu', role: 'Data Analyst', program: 'MTech', branch: 'Mathematics and Computing', cpi: 9.5 },
    { id: 3, name: 'Dolly', role: 'Software Developer', program: 'BTech', branch: 'Computer Science', cpi: 8.6 },
    { id: 4, name: 'Hindu', role: 'Software Developer', program: 'BTech', branch: 'Mathematics and Computing', cpi: 8.7 },
    { id: 5, name: 'Amrutha', role: 'Data Scientist', program: 'BTech', branch: 'Electrical', cpi: 8.8 },
    { id: 6, name: 'Akarsh', role: 'Software Developer', program: 'MTech', branch: 'Computer Science', cpi: 9.0},
    { id: 7, name: 'Sruthi', role: 'Software Developer', program: 'BTech', branch: 'Computer Science', cpi: 9.2 },
    { id: 8, name: 'Anwitha', role: 'Software Developer', program: 'BTech', branch: 'Computer Science', cpi: 9.6 },
    { id: 9, name: 'Surya', role: 'Software Developer', program: 'BTech', branch: 'Computer Science', cpi: 9.76 },
    { id: 10, name: 'Harsha', role: 'Software Developer', program: 'BTech', branch: 'Computer Science', cpi: 9.4 },
    { id: 11, name: 'Sathvik', role: 'Software Developer', program: 'BTech', branch: 'Computer Science', cpi: 8.61 },
    { id: 12, name: 'Jaya', role: 'Software Developer', program: 'BTech', branch: 'Computer Science', cpi: 8.3 },
    { id: 13, name: 'Shivam', role: 'Software Developer', program: 'BTech', branch: 'Computer Science', cpi: 8.9},
    { id: 14, name: 'Shivam', role: 'Data Scientist', program: 'BTech', branch: 'Computer Science', cpi: 8.9},
  ];

  const [filteredStudents, setFilteredStudents] = useState(students);

  const handleSearch = () => {
    const filteredList = students.filter(
      (student) =>
        (role === '' || student.role === role) &&
        (program.length === 0 || program.includes(student.program)) &&
        (branch.length === 0 || branch.includes(student.branch)) &&
        (cpi === '' || parseFloat(student.cpi) >= parseFloat(cpi))
    );

    setFilteredStudents(filteredList);
  };

  return (

      <Box sx={{ padding: 3, width: '100%', overflowY: 'auto', margin: 'auto' }}>
        <Typography variant="h7" style={{ marginLeft: '3px', color: 'blue', textDecoration: 'underline' }}>Applications</Typography>

        <Typography variant="h4" mb={2}>
          Student Applications
        </Typography>

        <Box sx={{ display: 'flex', gap: 2, mt: 2, alignItems: 'flex-end' }}>
          <Box sx={{ flex: 1 }}>
            <Typography variant="body1" mb={0}>
              Role
            </Typography>
            <FormControl variant="outlined" size="small" fullWidth>
              <Select value={role} onChange={(e) => setRole(e.target.value)}>
                <MenuItem value="">Select Role</MenuItem>
                <MenuItem value="Software Developer">Software Developer</MenuItem>
                <MenuItem value="Data Analyst">Data Analyst</MenuItem>
                <MenuItem value="Data Scientist">Data Scientist</MenuItem>
                <MenuItem value="Research Scientist">Research Scientist</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <Box sx={{ flex: 1 }}>
            <Typography variant="body1" mb={0}>
              Program
            </Typography>
            <FormControl variant="outlined" size="small" fullWidth>
              <Select
                multiple
                value={program}
                onChange={(e) => setProgram(e.target.value)}
                renderValue={(selected) => selected.join(', ')}
              >
                <MenuItem value="BTech">
                  <Checkbox checked={program.includes('BTech')} />
                  <ListItemText primary="BTech" />
                </MenuItem>
                <MenuItem value="MTech">
                  <Checkbox checked={program.includes('MTech')} />
                  <ListItemText primary="MTech" />
                </MenuItem>
              </Select>
            </FormControl>
          </Box>

          <Box sx={{ flex: 1 }}>
            <Typography variant="body1" mb={0}>
              Branch
            </Typography>
            <FormControl variant="outlined" size="small" fullWidth>
              <Select
                multiple
                value={branch}
                onChange={(e) => setBranch(e.target.value)}
                renderValue={(selected) => selected.join(', ')}
              >
                <MenuItem value="Computer Science">
                  <Checkbox checked={branch.includes('Computer Science')} />
                  <ListItemText primary="Computer Science" />
                </MenuItem>
                <MenuItem value="Mathematics and Computing">
                  <Checkbox checked={branch.includes('Mathematics and Computing')} />
                  <ListItemText primary="Mathematics and Computing" />
                </MenuItem>
                <MenuItem value="Electrical">
                  <Checkbox checked={branch.includes('Electrical')} />
                  <ListItemText primary="Electrical" />
                </MenuItem>
                <MenuItem value="Mechanical">
                  <Checkbox checked={branch.includes('Mechanical')} />
                  <ListItemText primary="Mechanical" />
                </MenuItem>
              </Select>
            </FormControl>
          </Box>

          <Box sx={{ flex: 1 }}>
            <Typography variant="body1" mb={0}>
              CPI
            </Typography>
            <TextField
              variant="outlined"
              value={cpi}
              onChange={(e) => setCpi(e.target.value)}
              type="number"
              size="small"
              fullWidth
            />
          </Box>
        </Box>

        <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}>
          <Button
            variant="contained"
            color="primary"
            sx={{ minWidth: '150px', fontSize: '0.95rem',  backgroundColor: '#1816B4' }}
            onClick={handleSearch}
          >
            Search
          </Button>
        </Box>

        <hr style={{ margin: '40px 0', border: 'none', height: '2px', backgroundColor: 'black' }} />
        {/*  */}
        {filteredStudents.length > 0 && (
        <Box>
          <Box
            sx={{
              display: 'flex',
              backgroundColor: '#d6e6f9',
              justifyContent: 'space-between',
              fontSize: '1rem',
              color: 'blue',
              padding: '5px',
            }}
          >
            <Box sx={{ flex: 1.5, textAlign: 'left' }}>NAME</Box>
            <Box sx={{ flex: 1, textAlign: 'center' }}>ROLE</Box>
            <Box sx={{ flex: 1, textAlign: 'center' }}>PROGRAM</Box>
            <Box sx={{ flex: 1, textAlign: 'center' }}>BRANCH</Box>
            <Box sx={{ flex: 0.8, textAlign: 'center' }}>CPI</Box>
          </Box>
          {filteredStudents.map((student) => (
            <React.Fragment key={student.id}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  backgroundColor: 'white',
                  padding: '10px',
                  borderBottom: '1px solid black',
                }}
              >
                <div style={{ flex: 1.5, display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                  <Avatar sx={{ backgroundColor: 'lightgrey', color: 'black', marginRight: '15px' }}>
                    <PersonIcon />
                  </Avatar>
                  <div style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>{/* Increased font size */}
                    {student.name}
                  </div>
                </div>
                <div style={{ flex: 1, textAlign: 'center', color: 'blue', fontSize: '1.25rem'}}>{student.role}</div>
                <div style={{ flex: 1, textAlign: 'center', fontSize: '1.25rem' }}>{student.program}</div>
                <div style={{ flex: 1, textAlign: 'center', whiteSpace: 'nowrap', fontSize: '1.25rem' }}>{student.branch}</div>
                <div style={{ flex: 0.8, textAlign: 'center', fontWeight: 'bold', fontSize: '1.25rem' }}>{student.cpi}</div>
              </div>
            </React.Fragment>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default StudentApplicationsForm;