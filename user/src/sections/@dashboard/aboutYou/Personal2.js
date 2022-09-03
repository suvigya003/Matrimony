

<Box>
        <Divider
          variant="middle"
          sx={{
            marginBottom: '30px',
            border: '1px dashed blue',
          }}
        />
        <Box
          sx={{
            display: 'flex',
            marginBottom: '30px',
          }}
        >
          <TextField
            id="standard-basic"
            label="First Name"
            variant="filled"
            type="text"
            lg={4}
            md={6}
            sm={12}
            name="firstName"
            onChange={handleChange}
            value={personalInfo.firstName}
            fullWidth
            InputProps={{
              disableUnderline: true,
            }}
            InputLabelProps={{
              style: {
                paddingTop: '5px',
                paddingLeft: '20px',
                color: '#bdbdbd',
                textTransform: 'none',
                fontSize: '15px',
                shrink: false,
              },
            }}
            sx={{
              color: 'secondary',
              paddingLeft: '18px',
              paddingBottom: '5px',
              // minWidth:'100%',
              border: 1,
              borderColor: '#bdbdbd',
              borderRadius: '3px',
            }}
          />
          <FormControl sx={{ m: 1 }} variant="outlined">
            <label htmlFor="temp">
              Title
              <OutlinedInput
                id="outlined-adornment-weight"
                fullWidth
                // value={values.weight}
                //   onChange={handleChange('weight')}
                //   endAdornment={<InputAdornment position="end">kg</InputAdornment>}
                aria-describedby="outlined-weight-helper-text"
                inputProps={{
                  'aria-label': 'weight',
                }}
              />
            </label>
          </FormControl>
          <Box
            width="100%"
            sx={{
              marginLeft: '30px',
            }}
          >
            <TextField
              id="standard-basic"
              label="Middle Name"
              variant="filled"
              type="text"
              name="middleName"
              onChange={handleChange}
              value={personalInfo.middleName}
              fullWidth
              //   className={classes.root}
              InputProps={{
                disableUnderline: true,
                color: 'secondary.main',
              }}
              InputLabelProps={{
                style: {
                  paddingTop: '5px',
                  // paddingLeft: '20px',
                  color: '#bdbdbd',
                  textTransform: 'none',
                  fontSize: '15px',
                  shrink: false,
                },
              }}
              sx={{
                // marginLeft:'30px',
                color: 'secondary',
                // paddingLeft: '18px',
                paddingBottom: '5px',
                // minWidth:'100%',
                border: 1,
                borderColor: '#bdbdbd',
                borderRadius: '3px',
              }}
            />
          </Box>
          <Box
            width="100%"
            sx={{
              marginLeft: '30px',
            }}
          >
            <TextField
              id="standard-basic"
              label="Last Name"
              variant="filled"
              type="text"
              name="lastName"
              onChange={handleChange}
              value={personalInfo.lastName}
              fullWidth
              InputProps={{
                disableUnderline: true,
              }}
              InputLabelProps={{
                style: {
                  paddingTop: '5px',
                  paddingLeft: '20px',
                  color: '#bdbdbd',
                  textTransform: 'none',
                  fontSize: '15px',
                  shrink: false,
                },
              }}
              sx={{
                // marginLeft:'30px',
                color: 'secondary',
                paddingLeft: '18px',
                paddingBottom: '5px',
                // minWidth:'100%',
                border: 1,
                borderColor: '#bdbdbd',
                borderRadius: '3px',
              }}
            />
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            marginBottom: '30px',
          }}
        >
          <TextField
            id="standard-basic"
            label="Gender"
            variant="filled"
            type="text"
            lg={4}
            md={6}
            sm={12}
            name="gender"
            onChange={handleChange}
            value={personalInfo.gender}
            fullWidth
            InputProps={{
              disableUnderline: true,
            }}
            InputLabelProps={{
              style: {
                paddingTop: '5px',
                paddingLeft: '20px',
                color: '#bdbdbd',
                textTransform: 'none',
                fontSize: '15px',
                shrink: false,
              },
            }}
            sx={{
              color: 'secondary',
              paddingLeft: '18px',
              paddingBottom: '5px',
              // minWidth:'100%',
              border: 1,
              borderColor: '#bdbdbd',
              borderRadius: '3px',
            }}
            select
          >
            <option value="Female">Female</option>
            <option value="Male">Male</option>
          </TextField>
          <Box
            width="100%"
            sx={{
              marginLeft: '30px',
            }}
          >
            <TextField
              id="standard-basic"
              label="Age"
              variant="filled"
              type="number"
              name="age"
              onChange={handleChange}
              value={personalInfo.age}
              fullWidth
              InputProps={{
                disableUnderline: true,
              }}
              InputLabelProps={{
                style: {
                  paddingTop: '5px',
                  paddingLeft: '20px',
                  color: '#bdbdbd',
                  textTransform: 'none',
                  fontSize: '15px',
                  shrink: false,
                },
              }}
              sx={{
                // marginLeft:'30px',
                color: 'secondary',
                paddingLeft: '18px',
                paddingBottom: '5px',
                // minWidth:'100%',
                border: 1,
                borderColor: '#bdbdbd',
                borderRadius: '3px',
              }}
            />
          </Box>

          <Box
            width="100%"
            sx={{
              marginLeft: '30px',
            }}
          >
            <TextField
              id="standard-basic"
              label="Height"
              variant="filled"
              name="height"
              onChange={handleChange}
              value={personalInfo.height}
              fullWidth
              InputProps={{
                disableUnderline: true,
              }}
              InputLabelProps={{
                style: {
                  paddingTop: '5px',
                  paddingLeft: '20px',
                  color: '#bdbdbd',
                  textTransform: 'none',
                  fontSize: '15px',
                  shrink: false,
                },
              }}
              sx={{
                // marginLeft:'30px',
                color: 'secondary',
                paddingLeft: '18px',
                paddingBottom: '5px',
                // minWidth:'100%',
                border: 1,
                borderColor: '#bdbdbd',
                borderRadius: '3px',
              }}
              select
            >
              <option value="Shri">Shri</option>
              <option value="Smt">Smt</option>
              <option value="Ms">Ms</option>
            </TextField>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            marginBottom: '30px',
          }}
        >
          <TextField
            id="standard-basic"
            label="Marital Status"
            variant="filled"
            lg={4}
            md={6}
            sm={12}
            name="maritalStatus"
            onChange={handleChange}
            value={personalInfo.maritalStatus}
            fullWidth
            InputProps={{
              disableUnderline: true,
            }}
            InputLabelProps={{
              style: {
                paddingTop: '5px',
                paddingLeft: '20px',
                color: '#bdbdbd',
                textTransform: 'none',
                fontSize: '15px',
                shrink: false,
              },
            }}
            sx={{
              color: 'secondary',
              paddingLeft: '18px',
              paddingBottom: '5px',
              // minWidth:'100%',
              border: 1,
              borderColor: '#bdbdbd',
              borderRadius: '3px',
            }}
            select
          >
            <option value="Never Married">Never Married</option>
            <option value="Widow">Widow</option>
            <option value="Divorced">Divorced</option>
          </TextField>
          <Box
            width="100%"
            sx={{
              marginLeft: '30px',
            }}
          >
            <TextField
              id="standard-basic"
              label="Blood Group"
              variant="filled"
              name="bloodGroup"
              onChange={handleChange}
              value={personalInfo.bloodGroup}
              fullWidth
              InputProps={{
                disableUnderline: true,
              }}
              InputLabelProps={{
                style: {
                  paddingTop: '5px',
                  paddingLeft: '20px',
                  color: '#bdbdbd',
                  textTransform: 'none',
                  fontSize: '15px',
                  shrink: false,
                },
              }}
              sx={{
                // marginLeft:'30px',
                color: 'secondary',
                paddingLeft: '18px',
                paddingBottom: '5px',
                // minWidth:'100%',
                border: 1,
                borderColor: '#bdbdbd',
                borderRadius: '3px',
              }}
              select
            >
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
            </TextField>
          </Box>

          <Box
            width="100%"
            sx={{
              marginLeft: '30px',
            }}
          >
            <TextField
              id="standard-basic"
              label="Date of Birth"
              variant="filled"
              type="date"
              name="dob"
              onChange={handleChange}
              value={personalInfo.dob}
              fullWidth
              InputProps={{
                disableUnderline: true,
              }}
              InputLabelProps={{
                style: {
                  paddingTop: '5px',
                  paddingLeft: '20px',
                  color: '#bdbdbd',
                  textTransform: 'none',
                  fontSize: '15px',
                  shrink: 'true',
                },
              }}
              sx={{
                // marginLeft:'30px',
                color: 'secondary',
                paddingLeft: '18px',
                paddingBottom: '5px',
                // minWidth:'100%',
                border: 1,
                borderColor: '#bdbdbd',
                borderRadius: '3px',
              }}
            />
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            marginBottom: '30px',
          }}
        >
          <TextField
            id="standard-basic"
            label="Weight"
            variant="filled"
            type="text"
            lg={4}
            md={6}
            sm={12}
            name="weight"
            onChange={handleChange}
            value={personalInfo.weight}
            fullWidth
            InputProps={{
              disableUnderline: true,
            }}
            InputLabelProps={{
              style: {
                paddingTop: '5px',
                paddingLeft: '20px',
                color: '#bdbdbd',
                textTransform: 'none',
                fontSize: '15px',
                shrink: false,
              },
            }}
            sx={{
              color: 'secondary',
              paddingLeft: '18px',
              paddingBottom: '5px',
              // minWidth:'100%',
              border: 1,
              borderColor: '#bdbdbd',
              borderRadius: '3px',
            }}
          />
          <Box
            width="100%"
            sx={{
              marginLeft: '30px',
            }}
          >
            <TextField
              id="outlined-multiline-flexible"
              label="Languages Known"
              variant="filled"
              type=""
              multiline
              maxRows={15}
              name="languagesKnown"
              onChange={handleChange}
              value={personalInfo.languagesKnown}
              fullWidth
              InputProps={{
                disableUnderline: true,
              }}
              InputLabelProps={{
                style: {
                  paddingTop: '5px',
                  paddingLeft: '20px',
                  color: '#bdbdbd',
                  textTransform: 'none',
                  fontSize: '15px',
                  shrink: false,
                },
              }}
              sx={{
                // marginLeft:'30px',
                color: 'secondary',
                paddingLeft: '18px',
                paddingBottom: '5px',
                // minWidth:'100%',
                border: 1,
                borderColor: '#bdbdbd',
                borderRadius: '3px',
              }}
            />
          </Box>

          <Box sx={{ width: '100%', marginLeft: '30px' }} />
        </Box>
        <Box
          sx={{
            display: 'flex',
            marginBottom: '30px',
            alignItems: 'center',
          }}
        >
          <Typography sx={{ marginRight: '10px' }}>Hobbies: </Typography>
          <Hobbies />
        </Box>
        <Typography mb="30px">Habits:</Typography>
        <Box
          sx={{
            display: 'flex',
            marginBottom: '30px',
          }}
        >
          
          <TextField
            // labelId="demo-simple-select-label"
            // id="demo-simple-select"
            // // value={age}
            // label="Drinking"
            // onChange={handleChange}

            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Drinking"
            variant="filled"
            type="text"
            lg={4}
            md={6}
            sm={12}
            name="drinking"
            onChange={handleChange}
            value={personalInfo.drinking}
            fullWidth
            InputProps={{
              disableUnderline: true,
            }}
            InputLabelProps={{
              style: {
                paddingTop: '5px',
                paddingLeft: '20px',
                color: '#bdbdbd',
                textTransform: 'none',
                fontSize: '15px',
                shrink: false,
              },
            }}
            sx={{
              color: 'secondary',
              paddingLeft: '18px',
              paddingBottom: '5px',
              // minWidth:'100%',
              border: 1,
              borderColor: '#bdbdbd',
              borderRadius: '3px',
            }}
            select
          >
            <option value="Female">Non-Drinking</option>
            <option value="s">Occassionally</option>
            <option value="Male">Frequently</option>
          </TextField>
         

          <TextField
            id="standard-basic"
            label="Eating"
            variant="filled"
            type="number"
            name="eating"
            onChange={handleChange}
            value={personalInfo.eating}
            fullWidth
            InputProps={{
              disableUnderline: true,
            }}
            InputLabelProps={{
              style: {
                paddingTop: '5px',
                paddingLeft: '20px',
                color: '#bdbdbd',
                textTransform: 'none',
                fontSize: '15px',
                shrink: false,
              },
            }}
            sx={{
              marginLeft: '30px',
              color: 'secondary',
              paddingLeft: '18px',
              paddingBottom: '5px',
              // minWidth:'100%',
              border: 1,
              borderColor: '#bdbdbd',
              borderRadius: '3px',
            }}
            select
          >
            <option value="Female">Vegetarain</option>
            <option value="Male">Non-Vegetarain</option>
          </TextField>
          <TextField
            id="standard-basic"
            label="Smoking"
            variant="filled"
            name="smoking"
            onChange={handleChange}
            value={personalInfo.smoking}
            fullWidth
            InputProps={{
              disableUnderline: true,
            }}
            InputLabelProps={{
              style: {
                paddingTop: '5px',
                paddingLeft: '20px',
                color: '#bdbdbd',
                textTransform: 'none',
                fontSize: '15px',
                shrink: false,
              },
            }}
            sx={{
              marginLeft: '30px',
              color: 'secondary',
              paddingLeft: '18px',
              paddingBottom: '5px',
              // minWidth:'100%',
              border: 1,
              borderColor: '#bdbdbd',
              borderRadius: '3px',
            }}
            select
          >
            <option value="Never">Non-Smoking</option>
            <option value="Smt">Occassionally</option>
            <option value="Ms">Habitual</option>
          </TextField>
        </Box>
        <Box
          sx={{
            display: 'flex',
            marginBottom: '30px',
          }}
        >
          <TextField
            id="outlined-multiline-flexible"
            label="Address"
            variant="filled"
            lg={3}
            md={6}
            sm={12}
            multiline
            maxRows={4}
            name="address"
            onChange={handleChange}
            value={personalInfo.address}
            fullWidth
            InputProps={{
              disableUnderline: true,
            }}
            InputLabelProps={{
              style: {
                paddingTop: '5px',
                paddingLeft: '20px',
                color: '#bdbdbd',
                textTransform: 'none',
                fontSize: '15px',
                shrink: false,
              },
            }}
            sx={{
              color: 'secondary',
              paddingLeft: '18px',
              paddingBottom: '5px',
              // minWidth:'100%',
              border: 1,
              borderColor: '#bdbdbd',
              borderRadius: '3px',
            }}
          />

          <Box
            width="100%"
            sx={{
              marginLeft: '30px',
            }}
          >
            <TextField
              id="standard-basic"
              label="Pin Code"
              variant="filled"
              name="pin"
              onChange={handleChange}
              value={personalInfo.pin}
              fullWidth
              //   width={'100px'}
              InputProps={{
                disableUnderline: true,
              }}
              InputLabelProps={{
                style: {
                  paddingTop: '5px',
                  paddingLeft: '20px',
                  color: '#bdbdbd',
                  textTransform: 'none',
                  fontSize: '15px',
                  shrink: false,
                },
              }}
              sx={{
                // marginLeft:'30px',
                color: 'secondary',
                paddingLeft: '18px',
                paddingBottom: '5px',
                // minWidth:'100%',
                border: 1,
                borderColor: '#bdbdbd',
                borderRadius: '3px',
              }}
            />
          </Box>

          <Box width="100%" sx={{ marginLeft: '30px' }} />
        </Box>
        <Box
          sx={{
            display: 'flex',
            marginBottom: '30px',
          }}
        >
          <TextField
            id="standard-basic"
            label="Country"
            variant="filled"
            lg={4}
            md={6}
            sm={12}
            name="country"
            onChange={handleChange}
            value={personalInfo.country}
            fullWidth
            InputProps={{
              disableUnderline: true,
            }}
            InputLabelProps={{
              style: {
                paddingTop: '5px',
                paddingLeft: '20px',
                color: '#bdbdbd',
                textTransform: 'none',
                fontSize: '15px',
                shrink: false,
              },
            }}
            sx={{
              color: 'secondary',
              paddingLeft: '18px',
              paddingBottom: '5px',
              // minWidth:'100%',
              border: 1,
              borderColor: '#bdbdbd',
              borderRadius: '3px',
            }}
          />
          <Box
            width="100%"
            sx={{
              marginLeft: '30px',
            }}
          >
            <TextField
              id="standard-basic"
              label="State"
              variant="filled"
              name="state"
              onChange={handleChange}
              value={personalInfo.state}
              fullWidth
              InputProps={{
                disableUnderline: true,
              }}
              InputLabelProps={{
                style: {
                  paddingTop: '5px',
                  paddingLeft: '20px',
                  color: '#bdbdbd',
                  textTransform: 'none',
                  fontSize: '15px',
                  shrink: false,
                },
              }}
              sx={{
                // marginLeft:'30px',
                color: 'secondary',
                paddingLeft: '18px',
                paddingBottom: '5px',
                // minWidth:'100%',
                border: 1,
                borderColor: '#bdbdbd',
                borderRadius: '3px',
              }}
            />
          </Box>
          <Box
            width="100%"
            sx={{
              marginLeft: '30px',
            }}
          >
            <TextField
              id="standard-basic"
              label="City"
              variant="filled"
              name="city"
              onChange={handleChange}
              value={personalInfo.city}
              fullWidth
              InputProps={{
                disableUnderline: true,
              }}
              InputLabelProps={{
                style: {
                  paddingTop: '5px',
                  paddingLeft: '20px',
                  color: '#bdbdbd',
                  textTransform: 'none',
                  fontSize: '15px',
                  shrink: false,
                },
              }}
              sx={{
                // marginLeft:'30px',
                color: 'secondary',
                paddingLeft: '18px',
                paddingBottom: '5px',
                // minWidth:'100%',
                border: 1,
                borderColor: '#bdbdbd',
                borderRadius: '3px',
              }}
            />
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            marginBottom: '30px',
          }}
        >
          <TextField
            id="standard-basic"
            label="Email Id"
            variant="filled"
            type="email"
            lg={4}
            md={6}
            sm={12}
            name="email"
            onChange={handleChange}
            value={personalInfo.email}
            fullWidth
            InputProps={{
              disableUnderline: true,
            }}
            InputLabelProps={{
              style: {
                paddingTop: '5px',
                paddingLeft: '20px',
                color: '#bdbdbd',
                textTransform: 'none',
                fontSize: '15px',
                shrink: false,
              },
            }}
            sx={{
              color: 'secondary',
              paddingLeft: '18px',
              paddingBottom: '5px',
              // minWidth:'100%',
              border: 1,
              borderColor: '#bdbdbd',
              borderRadius: '3px',
            }}
          />
        </Box>
        <Box
          width="100%"
          sx={{
            marginLeft: '30px',
          }}
        >
          <TextField
            id="standard-basic"
            label="Contact Number"
            variant="filled"
            type="number"
            name="contact"
            onChange={handleChange}
            value={personalInfo.contact}
            fullWidth
            InputProps={{
              disableUnderline: true,
            }}
            InputLabelProps={{
              style: {
                paddingTop: '5px',
                paddingLeft: '20px',
                color: '#bdbdbd',
                textTransform: 'none',
                fontSize: '15px',
                shrink: false,
              },
            }}
            sx={{
              // marginLeft:'30px',
              color: 'secondary',
              paddingLeft: '18px',
              paddingBottom: '5px',
              // minWidth:'100%',
              border: 1,
              borderColor: '#bdbdbd',
              borderRadius: '3px',
            }}
          />
        </Box>
        {/* <Box sx={{ width: '100%', marginLeft: '30px' }} /> */}
        {/* <center>
          <Button onClick={handleClick}>NEXT</Button>
        </center> */}
</Box>
      


      // Astro Info

       <Box>
        {/* <Divider
          variant="middle"
          sx={{
            marginBottom: "30px",
            border: "1px dashed blue",
          }}
        /> */}
        <Box
          sx={{
            display: 'flex',
            marginBottom: '30px',
          }}
        >
          <TextField
            id="standard-basic"
            label="Rashi"
            variant="filled"
            type="number"
            lg={4}
            md={6}
            sm={12}
            name="rashi"
            onChange={handleChange}
            value={astroInfo.rashi}
            fullWidth
            InputProps={{
              disableUnderline: true,
            }}
            InputLabelProps={{
              style: {
                paddingTop: '5px',
                paddingLeft: '20px',
                color: '#bdbdbd',
                textTransform: 'none',
                fontSize: '15px',
                shrink: 'false',
              },
            }}
            sx={{
              color: 'secondary',
              paddingLeft: '18px',
              paddingBottom: '5px',
              // minWidth:'100%',
              border: 1,
              borderColor: '#bdbdbd',
              borderRadius: '3px',
            }}
          />
          <Box
            width="100%"
            sx={{
              marginLeft: '30px',
            }}
          >
            <TextField
              id="standard-basic"
              label="Nakshatra"
              variant="filled"
              type="text"
              name="nakshatra"
              onChange={handleChange}
              value={astroInfo.nakshatra}
              fullWidth
              InputProps={{
                disableUnderline: true,
              }}
              InputLabelProps={{
                style: {
                  paddingTop: '5px',
                  paddingLeft: '20px',
                  color: '#bdbdbd',
                  textTransform: 'none',
                  fontSize: '15px',
                  shrink: 'false',
                },
              }}
              sx={{
                //     marginLeft: "30px",
                color: 'secondary',
                paddingLeft: '18px',
                paddingBottom: '5px',
                // minWidth:'100%',
                border: 1,
                borderColor: '#bdbdbd',
                borderRadius: '3px',
              }}
            />
          </Box>

          <Box
            width="100%"
            sx={{
              marginLeft: '30px',
            }}
          >
            <TextField
              id="standard-basic"
              label="Date of Birth"
              type="date"
              variant="filled"
              name="dob"
              onChange={handleChange}
              value={astroInfo.dob}
              fullWidth
              InputProps={{
                disableUnderline: true,
              }}
              InputLabelProps={{
                style: {
                  paddingTop: '5px',
                  paddingLeft: '20px',
                  color: '#bdbdbd',
                  textTransform: 'none',
                  fontSize: '15px',
                  shrink: 'false',
                },
              }}
              sx={{
                //     marginLeft: "30px",
                color: 'secondary',
                paddingLeft: '18px',
                paddingBottom: '5px',
                // minWidth:'100%',
                border: 1,
                borderColor: '#bdbdbd',
                borderRadius: '3px',
              }}
            />
          </Box>
        </Box>
        {/* <center>
          <Button onClick={handleClick}>NEXT</Button>
        </center> */}
      </Box>

    //   EducationalInfo

     <Box>
        {/* <Divider
          variant="middle"
          sx={{
            marginBottom: "30px",
            border: "1px dashed blue",
          }}
        /> */}

        <Box
          sx={{
            display: 'flex',
            marginBottom: '30px',
          }}
        >
          <TextField
            id="standard-basic"
            label="Highest Education"
            variant="filled"
            lg={4}
            md={6}
            sm={12}
            name="highestEducation"
            onChange={handleChange}
            value={educationalInfo.highestEducation}
            fullWidth
            InputProps={{
              disableUnderline: true,
            }}
            InputLabelProps={{
              style: {
                paddingTop: '5px',
                paddingLeft: '20px',
                color: '#bdbdbd',
                textTransform: 'none',
                fontSize: '15px',
                shrink: 'false',
              },
            }}
            sx={{
              color: 'secondary',
              paddingLeft: '18px',
              paddingBottom: '5px',
              // minWidth:'100%',
              border: 1,
              borderColor: '#bdbdbd',
              borderRadius: '3px',
            }}
            select
          >
            <option value="Post Graduation">Post Graduation</option>
            <option value="Graduation">Graduation</option>
            <option value="Intermediate">Intermediate</option>
            <option value="High School">High School</option>
            <option value="Other">Other</option>
          </TextField>
          <TextField
            id="standard-basic"
            label="Course"
            variant="filled"
            name="educationType"
            onChange={handleChange}
            value={educationalInfo.educationType}
            fullWidth
            InputProps={{
              disableUnderline: true,
            }}
            InputLabelProps={{
              style: {
                paddingTop: '5px',
                paddingLeft: '20px',
                color: '#bdbdbd',
                textTransform: 'none',
                fontSize: '15px',
                shrink: 'false',
              },
            }}
            sx={{
              marginLeft: '30px',
              color: 'secondary',
              paddingLeft: '18px',
              paddingBottom: '5px',
              // minWidth:'100%',
              border: 1,
              borderColor: '#bdbdbd',
              borderRadius: '3px',
            }}
            select
          >
            <option value="Shri">B.Sc</option>
            <option value="Smt">B.A.</option>
            <option value="Ms">B.Tech</option>
            <option value="Smt">B.Com</option>
            <option value="Ms">M.A.</option>
            <option value="Smt">M.Com</option>
            <option value="Ms">M.Sc</option>
            <option value="Ms">M.Tech</option>
            <option value="Ms">MCA</option>
          </TextField>
          {/* <TextField
            id="standard-basic"
            label=""
            variant="filled"
            name=""
            onChange={handleChange}
            value={educationalInfo}
            fullWidth
            InputProps={{
              disableUnderline: true,
            }}
            InputLabelProps={{
              style: {
                paddingTop: "5px",
                paddingLeft: "20px",
                color: "#bdbdbd",
                textTransform: "none",
                fontSize: "15px",
                shrink: "false",
              },
            }}
            sx={{
              marginLeft: "30px",
              color: "secondary",
              paddingLeft: "18px",
              paddingBottom: "5px",
              // minWidth:'100%',
              //   border: 1,
              borderColor: "#bdbdbd",
              borderRadius: "3px",
            }}
          /> */}
          <Button
            variant="contained"
            fullWidth
            sx={{
              marginLeft: '30px',
            }}
          >
            <AddCircleOutlineIcon
              sx={{
                marginRight: '10px',
              }}
            />
            Add More
          </Button>
        </Box>

        {/* <center>
          <Button onClick={handleClick}>NEXT</Button>
        </center> */}
      </Box>


// Professional Info

<Box>
        {/* <Divider
          variant="middle"
          sx={{
            marginBottom: "30px",
            border: "1px dashed blue",
          }}
        /> */}
        <Box
          sx={{
            display: 'flex',
            marginBottom: '30px',
          }}
        >
          <TextField
            id="standard-basic"
            label="Employed In"
            variant="filled"
            type="number"
            lg={4}
            md={6}
            sm={12}
            name="employedIn"
            onChange={handleChange}
            value={professionalInfo.employedIn}
            //   {const a=()=>{setCount(value.length > 0 ? count + 1 : count)}}
            fullWidth
            InputProps={{
              disableUnderline: true,
            }}
            InputLabelProps={{
              style: {
                // paddingTop:'5px',
                paddingLeft: '20px',
                color: '#bdbdbd',
                textTransform: 'none',
                fontSize: '15px',
                shrink: 'false',
              },
            }}
            sx={{
              color: 'secondary',
              paddingLeft: '18px',
              paddingBottom: '5px',
              // minWidth:'100%',
              border: 1,
              borderColor: '#bdbdbd',
              borderRadius: '3px',
              marginTop: '0px',
            }}
            select
          >
            <option value="Government/ PSU">Government/ PSU</option>
            <option value="Private">Private</option>
            <option value="Business">Business</option>
            <option value="Defence">Defence</option>
            <option value="Self Employed">Self Employed</option>
            <option value="Not Working">Not Working</option>
          </TextField>
          <TextField
            id="standard-basic"
            label="Organisation Name"
            variant="filled"
            type="text"
            name="organisationName"
            onChange={handleChange}
            value={professionalInfo.organisationName}
            //   {count}={{count} + 1}
            fullWidth
            InputProps={{
              disableUnderline: true,
            }}
            InputLabelProps={{
              style: {
                paddingTop: '5px',
                paddingLeft: '20px',
                color: '#bdbdbd',
                textTransform: 'none',
                fontSize: '15px',
                shrink: 'false',
              },
            }}
            sx={{
              marginLeft: '30px',
              color: 'secondary',
              paddingLeft: '18px',
              paddingBottom: '5px',
              // minWidth:'100%',
              border: 1,
              borderColor: '#bdbdbd',
              borderRadius: '3px',
            }}
          />
          <TextField
            id="standard-basic"
            label="Annual Income"
            variant="filled"
            type="text"
            name="annualIncome"
            onChange={handleChange}
            value={professionalInfo.annualIncome}
            fullWidth
            InputProps={{
              disableUnderline: true,
            }}
            InputLabelProps={{
              style: {
                paddingTop: '5px',
                paddingLeft: '20px',
                color: '#bdbdbd',
                textTransform: 'none',
                fontSize: '15px',
                shrink: 'false',
              },
            }}
            sx={{
              marginLeft: '30px',
              color: 'secondary',
              paddingLeft: '18px',
              paddingBottom: '5px',
              // minWidth:'100%',
              border: 1,
              borderColor: '#bdbdbd',
              borderRadius: '3px',
            }}
          />
        </Box>
        <Typography mb="10px">Work Location:</Typography>
        <Box
          sx={{
            display: 'flex',
            marginBottom: '30px',
          }}
        >
          <TextField
            id="standard-basic"
            label="Country"
            variant="filled"
            lg={4}
            md={6}
            sm={12}
            name="country"
            onChange={handleChange}
            value={professionalInfo.country}
            fullWidth
            InputProps={{
              disableUnderline: true,
            }}
            InputLabelProps={{
              style: {
                paddingTop: '5px',
                paddingLeft: '20px',
                color: '#bdbdbd',
                textTransform: 'none',
                fontSize: '15px',
                shrink: 'false',
              },
            }}
            sx={{
              color: 'secondary',
              paddingLeft: '18px',
              paddingBottom: '5px',
              // minWidth:'100%',
              border: 1,
              borderColor: '#bdbdbd',
              borderRadius: '3px',
            }}
          />
          <TextField
            id="standard-basic"
            label="State"
            variant="filled"
            name="state"
            onChange={handleChange}
            value={professionalInfo.state}
            fullWidth
            InputProps={{
              disableUnderline: true,
            }}
            InputLabelProps={{
              style: {
                paddingTop: '5px',
                paddingLeft: '20px',
                color: '#bdbdbd',
                textTransform: 'none',
                fontSize: '15px',
                shrink: 'false',
              },
            }}
            sx={{
              marginLeft: '30px',
              color: 'secondary',
              paddingLeft: '18px',
              paddingBottom: '5px',
              // minWidth:'100%',
              border: 1,
              borderColor: '#bdbdbd',
              borderRadius: '3px',
            }}
          />
          <TextField
            id="standard-basic"
            label="City"
            variant="filled"
            name="city"
            onChange={handleChange}
            value={professionalInfo.city}
            fullWidth
            InputProps={{
              disableUnderline: true,
            }}
            InputLabelProps={{
              style: {
                paddingTop: '5px',
                paddingLeft: '20px',
                color: '#bdbdbd',
                textTransform: 'none',
                fontSize: '15px',
                shrink: 'false',
              },
            }}
            sx={{
              marginLeft: '30px',
              color: 'secondary',
              paddingLeft: '18px',
              paddingBottom: '5px',
              // minWidth:'100%',
              border: 1,
              borderColor: '#bdbdbd',
              borderRadius: '3px',
            }}
          />
        </Box>

        {/* <center>
          <Button onClick={handleClick}>NEXT</Button>
        </center> */}
      </Box>

      //Family Info

      <Box>
        {/* <Divider
          variant="middle"
          sx={{
            marginBottom: "30px",
            border: "1px dashed blue",
          }}
        /> */}
        <Box
          sx={{
            display: 'flex',
            marginBottom: '30px',
          }}
        >
          <TextField
            id="standard-basic"
            label="Family Type"
            variant="filled"
            type="number"
            lg={4}
            md={6}
            sm={12}
            name="familyType"
            onChange={handleChange}
            value={familyInfo.familyType}
            fullWidth
            InputProps={{
              disableUnderline: true,
            }}
            InputLabelProps={{
              style: {
                paddingTop: '5px',
                paddingLeft: '20px',
                color: '#bdbdbd',
                textTransform: 'none',
                fontSize: '15px',
                shrink: 'false',
              },
            }}
            sx={{
              color: 'secondary',
              paddingLeft: '18px',
              paddingBottom: '5px',
              // minWidth:'100%',
              border: 1,
              borderColor: '#bdbdbd',
              borderRadius: '3px',
            }}
            select
          >
            <MenuItem value="Shri">Joint</MenuItem>
            <MenuItem value="Smt">Nuclear</MenuItem>
          </TextField>

          <Box
            width="100%"
            sx={{
              marginLeft: '30px',
            }}
          />
          <Box
            width="100%"
            sx={{
              marginLeft: '30px',
            }}
          />
        </Box>
        <Typography mb="30px">Father:</Typography>
        <Box
          sx={{
            display: 'flex',
            marginBottom: '30px',
          }}
        >
          <TextField
            id="standard-basic"
            label="Name"
            variant="filled"
            type="text"
            lg={4}
            md={6}
            sm={12}
            name="fName"
            onChange={handleChange}
            value={familyInfo.fName}
            fullWidth
            InputProps={{
              disableUnderline: true,
            }}
            InputLabelProps={{
              style: {
                paddingTop: '5px',
                paddingLeft: '20px',
                color: '#bdbdbd',
                textTransform: 'none',
                fontSize: '15px',
                shrink: 'false',
              },
            }}
            sx={{
              color: 'secondary',
              paddingLeft: '18px',
              paddingBottom: '5px',
              // minWidth:'100%',
              border: 1,
              borderColor: '#bdbdbd',
              borderRadius: '3px',
            }}
          />
          <Box
            width="100%"
            sx={{
              marginLeft: '30px',
            }}
          >
            <TextField
              id="standard-basic"
              label="Occupation"
              variant="filled"
              name="fOccupation"
              onChange={handleChange}
              value={familyInfo.fOccupation}
              fullWidth
              InputProps={{
                disableUnderline: true,
              }}
              InputLabelProps={{
                style: {
                  paddingTop: '5px',
                  paddingLeft: '20px',
                  color: '#bdbdbd',
                  textTransform: 'none',
                  fontSize: '15px',
                  shrink: 'false',
                },
              }}
              sx={{
                //     marginLeft: "30px",
                color: 'secondary',
                paddingLeft: '18px',
                paddingBottom: '5px',
                // minWidth:'100%',
                border: 1,
                borderColor: '#bdbdbd',
                borderRadius: '3px',
              }}
              select
            >
              <MenuItem value="Government/ PSU">Government/ PSU</MenuItem>
              <MenuItem value="Private">Private</MenuItem>
              <MenuItem value="Business">Business</MenuItem>
              <MenuItem value="Defence">Defence</MenuItem>
              <MenuItem value="Self Employed">Self Employed</MenuItem>
              <MenuItem value="Not Working">Not Working</MenuItem>
            </TextField>
          </Box>

          <Box
            width="100%"
            sx={{
              marginLeft: '30px',
            }}
          >
            <TextField
              id="standard-basic"
              label="Company/ Institution Name"
              variant="filled"
              name="fCompany"
              onChange={handleChange}
              value={familyInfo.fCompany}
              fullWidth
              InputProps={{
                disableUnderline: true,
              }}
              InputLabelProps={{
                style: {
                  paddingTop: '5px',
                  paddingLeft: '20px',
                  color: '#bdbdbd',
                  textTransform: 'none',
                  fontSize: '15px',
                  shrink: 'false',
                },
              }}
              sx={{
                //     marginLeft: "30px",
                color: 'secondary',
                paddingLeft: '18px',
                paddingBottom: '5px',
                // minWidth:'100%',
                border: 1,
                borderColor: '#bdbdbd',
                borderRadius: '3px',
              }}
            />
          </Box>
        </Box>
        <Typography mb="30px">Mother:</Typography>
        <Box
          sx={{
            display: 'flex',
            marginBottom: '30px',
          }}
        >
          <TextField
            id="standard-basic"
            label="Name"
            variant="filled"
            type="text"
            lg={4}
            md={6}
            sm={12}
            name="mName"
            onChange={handleChange}
            value={familyInfo.mName}
            fullWidth
            InputProps={{
              disableUnderline: true,
            }}
            InputLabelProps={{
              style: {
                paddingTop: '5px',
                paddingLeft: '20px',
                color: '#bdbdbd',
                textTransform: 'none',
                fontSize: '15px',
                shrink: 'false',
              },
            }}
            sx={{
              color: 'secondary',
              paddingLeft: '18px',
              paddingBottom: '5px',
              // minWidth:'100%',
              border: 1,
              borderColor: '#bdbdbd',
              borderRadius: '3px',
            }}
          />
          <Box
            width="100%"
            sx={{
              marginLeft: '30px',
            }}
          >
            <TextField
              id="standard-basic"
              label="Occupation"
              variant="filled"
              name="mOccupation"
              onChange={handleChange}
              value={familyInfo.mOccupation}
              fullWidth
              InputProps={{
                disableUnderline: true,
              }}
              InputLabelProps={{
                style: {
                  paddingTop: '5px',
                  paddingLeft: '20px',
                  color: '#bdbdbd',
                  textTransform: 'none',
                  fontSize: '15px',
                  shrink: 'false',
                },
              }}
              sx={{
                //   marginLeft: "30px",
                color: 'secondary',
                paddingLeft: '18px',
                paddingBottom: '5px',
                // minWidth:'100%',
                border: 1,
                borderColor: '#bdbdbd',
                borderRadius: '3px',
              }}
              select
            >
              <MenuItem value="Government/ PSU">Government/ PSU</MenuItem>
              <MenuItem value="Private">Private</MenuItem>
              <MenuItem value="Business">Business</MenuItem>
              <MenuItem value="Defence">Defence</MenuItem>
              <MenuItem value="Self Employed">Self Employed</MenuItem>
              <MenuItem value="House Wife">House Wife</MenuItem>
            </TextField>
          </Box>

          <Box
            width="100%"
            sx={{
              marginLeft: '30px',
            }}
          >
            <TextField
              id="standard-basic"
              label="Company/ Institution Name"
              variant="filled"
              name="mCompany"
              onChange={handleChange}
              value={familyInfo.mCompany}
              fullWidth
              InputProps={{
                disableUnderline: true,
              }}
              InputLabelProps={{
                style: {
                  paddingTop: '5px',
                  paddingLeft: '20px',
                  color: '#bdbdbd',
                  textTransform: 'none',
                  fontSize: '15px',
                  shrink: 'false',
                },
              }}
              sx={{
                //   marginLeft: "30px",
                color: 'secondary',
                paddingLeft: '18px',
                paddingBottom: '5px',
                // minWidth:'100%',
                border: 1,
                borderColor: '#bdbdbd',
                borderRadius: '3px',
              }}
            />
          </Box>
        </Box>
        <Typography mb="30px">Brother:</Typography>
        <Box
          sx={{
            display: 'flex',
            marginBottom: '10px',
          }}
        >
          <TextField
            id="standard-basic"
            label="Name"
            variant="filled"
            type="text"
            lg={4}
            md={6}
            sm={12}
            name="bName"
            onChange={handleChange}
            value={familyInfo.bName}
            fullWidth
            InputProps={{
              disableUnderline: true,
            }}
            InputLabelProps={{
              style: {
                paddingTop: '5px',
                paddingLeft: '20px',
                color: '#bdbdbd',
                textTransform: 'none',
                fontSize: '15px',
                shrink: 'false',
              },
            }}
            sx={{
              color: 'secondary',
              paddingLeft: '18px',
              paddingBottom: '5px',
              // minWidth:'100%',
              border: 1,
              borderColor: '#bdbdbd',
              borderRadius: '3px',
            }}
          />
          <Box
            width="100%"
            sx={{
              marginLeft: '30px',
            }}
          >
            <TextField
              id="standard-basic"
              label="Occupation"
              variant="filled"
              name="bOccupation"
              onChange={handleChange}
              value={familyInfo}
              fullWidth
              InputProps={{
                disableUnderline: true,
              }}
              InputLabelProps={{
                style: {
                  paddingTop: '5px',
                  paddingLeft: '20px',
                  color: '#bdbdbd',
                  textTransform: 'none',
                  fontSize: '15px',
                  shrink: 'flase',
                },
              }}
              sx={{
                //   marginLeft: "30px",
                color: 'secondary',
                paddingLeft: '18px',
                paddingBottom: '5px',
                // minWidth:'100%',
                border: 1,
                borderColor: '#bdbdbd',
                borderRadius: '3px',
              }}
              select
            >
              <MenuItem value="Government/ PSU">Government/ PSU</MenuItem>
              <MenuItem value="Private">Private</MenuItem>
              <MenuItem value="Business">Business</MenuItem>
              <MenuItem value="Defence">Defence</MenuItem>
              <MenuItem value="Self Employed">Self Employed</MenuItem>
              <MenuItem value="Student">Student</MenuItem>
            </TextField>
          </Box>

          <Box
            width="100%"
            sx={{
              marginLeft: '30px',
            }}
          >
            <TextField
              id="standard-basic"
              label="Company/ Institution Name"
              variant="filled"
              name="bCompany"
              onChange={handleChange}
              value={familyInfo.bCompany}
              fullWidth
              InputProps={{
                disableUnderline: true,
              }}
              InputLabelProps={{
                style: {
                  paddingTop: '5px',
                  paddingLeft: '20px',
                  color: '#bdbdbd',
                  textTransform: 'none',
                  fontSize: '15px',
                  shrink: 'false',
                },
              }}
              sx={{
                //   marginLeft: "30px",
                color: 'secondary',
                paddingLeft: '18px',
                paddingBottom: '5px',
                // minWidth:'100%',
                border: 1,
                borderColor: '#bdbdbd',
                borderRadius: '3px',
              }}
            />
          </Box>
        </Box>
        <Button
          variant="contained"
          //   name=""
          onChange={handleChange}
          value={familyInfo}
          fullWidth
          sx={{
            // display:{sm:6, lg:4,xs:12},
            //     marginLeft:'30px'
            marginBottom: '30px',
            width: {
              xl: 350,
              lg: 325,
              md: 400,
              sm: 400,
              xs: 400,
            },
          }}
        >
          <AddCircleOutlineIcon
            sx={{
              marginRight: '10px',
            }}
          />
          More Preferences
        </Button>
        <Typography mb="30px">Sister:</Typography>
        <Box
          sx={{
            display: 'flex',
            marginBottom: '10px',
          }}
        >
          <TextField
            id="standard-basic"
            label="Name"
            variant="filled"
            type="text"
            lg={4}
            md={6}
            sm={12}
            name="sName"
            onChange={handleChange}
            value={familyInfo.sName}
            fullWidth
            InputProps={{
              disableUnderline: true,
            }}
            InputLabelProps={{
              style: {
                paddingTop: '5px',
                paddingLeft: '20px',
                color: '#bdbdbd',
                textTransform: 'none',
                fontSize: '15px',
                shrink: 'false',
              },
            }}
            sx={{
              color: 'secondary',
              paddingLeft: '18px',
              paddingBottom: '5px',
              // minWidth:'100%',
              border: 1,
              borderColor: '#bdbdbd',
              borderRadius: '3px',
            }}
          />
          <Box
            width="100%"
            sx={{
              marginLeft: '30px',
            }}
          >
            <TextField
              id="standard-basic"
              label="Occupation"
              variant="filled"
              name="sOccupation"
              onChange={handleChange}
              value={familyInfo}
              fullWidth
              InputProps={{
                disableUnderline: true,
              }}
              InputLabelProps={{
                style: {
                  paddingTop: '5px',
                  paddingLeft: '20px',
                  color: '#bdbdbd',
                  textTransform: 'none',
                  fontSize: '15px',
                  shrink: 'false',
                },
              }}
              sx={{
                //     marginLeft: "30px",
                color: 'secondary',
                paddingLeft: '18px',
                paddingBottom: '5px',
                // minWidth:'100%',
                border: 1,
                borderColor: '#bdbdbd',
                borderRadius: '3px',
              }}
              select
            >
              <MenuItem value="Government/ PSU">Government/ PSU</MenuItem>
              <MenuItem value="Private">Private</MenuItem>
              <MenuItem value="Business">Business</MenuItem>
              <MenuItem value="Defence">Defence</MenuItem>
              <MenuItem value="Self Employed">Self Employed</MenuItem>
              <MenuItem value="Student">Student</MenuItem>
            </TextField>
          </Box>

          <Box
            width="100%"
            sx={{
              marginLeft: '30px',
            }}
          >
            <TextField
              id="standard-basic"
              label="Company/ Institution Name"
              variant="filled"
              name="sCompany"
              onChange={handleChange}
              value={familyInfo.sCompany}
              fullWidth
              InputProps={{
                disableUnderline: true,
              }}
              InputLabelProps={{
                style: {
                  paddingTop: '5px',
                  paddingLeft: '20px',
                  color: '#bdbdbd',
                  textTransform: 'none',
                  fontSize: '15px',
                  shrink: 'false',
                },
              }}
              sx={{
                //     marginLeft: "30px",
                color: 'secondary',
                paddingLeft: '18px',
                paddingBottom: '5px',
                // minWidth:'100%',
                border: 1,
                borderColor: '#bdbdbd',
                borderRadius: '3px',
              }}
            />
          </Box>
        </Box>
        <Button
          variant="contained"
          //   name=""
          onChange={handleChange}
          value={familyInfo}
          fullWidth
          sx={{
            // display:{sm:6, lg:4,xs:12},
            //     marginLeft:'30px'
            marginBottom: '30px',
            width: {
              xl: 390,
              lg: 325,
              md: 400,
              sm: 400,
              xs: 400,
            },
          }}
        >
          <AddCircleOutlineIcon
            sx={{
              marginRight: '10px',
            }}
          />
          More Preferences
        </Button>
        <Box
          sx={{
            display: 'flex',
            marginBottom: '10px',
            alignItems: 'center',
            //     justifyContent:'center'
          }}
        >
          <Typography mb="0px">Address:</Typography>
          <input type="checkbox" />
          {/* <TextField type="checkbox"/> */}
          <Typography mb="0px">Same as Bride</Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            marginBottom: '30px',
          }}
        >
          <TextField
            id="outlined-multiline-flexible"
            label="Address"
            variant="filled"
            lg={3}
            md={6}
            sm={12}
            multiline
            maxRows={4}
            name="address"
            onChange={handleChange}
            value={familyInfo.address}
            fullWidth
            InputProps={{
              disableUnderline: true,
            }}
            InputLabelProps={{
              style: {
                paddingTop: '5px',
                paddingLeft: '20px',
                color: '#bdbdbd',
                textTransform: 'none',
                fontSize: '15px',
                shrink: 'false',
              },
            }}
            sx={{
              color: 'secondary',
              paddingLeft: '18px',
              paddingBottom: '5px',
              // minWidth:'100%',
              border: 1,
              borderColor: '#bdbdbd',
              borderRadius: '3px',
            }}
          />

          <Box
            width="100%"
            sx={{
              marginLeft: '30px',
            }}
          />
          <Box
            width="100%"
            sx={{
              marginLeft: '30px',
            }}
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            marginBottom: '30px',
          }}
        >
          <TextField
            id="standard-basic"
            label="Contact Number 1"
            variant="filled"
            type="number"
            lg={4}
            md={6}
            sm={12}
            name="contactNumber1"
            onChange={handleChange}
            value={familyInfo.contactNumber1}
            fullWidth
            InputProps={{
              disableUnderline: true,
            }}
            InputLabelProps={{
              style: {
                paddingTop: '5px',
                paddingLeft: '20px',
                color: '#bdbdbd',
                textTransform: 'none',
                fontSize: '15px',
                shrink: 'false',
              },
            }}
            sx={{
              color: 'secondary',
              paddingLeft: '18px',
              paddingBottom: '5px',
              // minWidth:'100%',
              border: 1,
              borderColor: '#bdbdbd',
              borderRadius: '3px',
            }}
          />
          <Box
            width="100%"
            sx={{
              marginLeft: '30px',
            }}
          >
            <TextField
              id="standard-basic"
              label="Contact Number 2"
              variant="filled"
              type="number"
              name="contactNumber2"
              onChange={handleChange}
              value={familyInfo.contactNumber2}
              fullWidth
              InputProps={{
                disableUnderline: true,
              }}
              InputLabelProps={{
                style: {
                  paddingTop: '5px',
                  paddingLeft: '20px',
                  color: '#bdbdbd',
                  textTransform: 'none',
                  fontSize: '15px',
                  shrink: 'false',
                },
              }}
              sx={{
                //   marginLeft: "30px",
                color: 'secondary',
                paddingLeft: '18px',
                paddingBottom: '5px',
                // minWidth:'100%',
                border: 1,
                borderColor: '#bdbdbd',
                borderRadius: '3px',
              }}
            />
          </Box>

          <Box
            width="100%"
            sx={{
              marginLeft: '30px',
            }}
          />
        </Box>
        {/* <center>
          <Button onClick={handleClick}>NEXT</Button>
        </center> */}
      </Box>

      //Religion Info
      <Box>
            {/* <Divider variant="middle"
                              sx={{
                                    marginBottom: '30px',
                                    border: '1px dashed blue'
                              }}
                        /> */}
            <Box
              sx={{
                display: 'flex',
                marginBottom: '30px',
              }}
            >
              <TextField
                id="standard-basic"
                label="Religion"
                variant="filled"
                type="text"
                lg={4}
                md={6}
                sm={12}
                name="religion"
                onChange={handleChange}
                value={religionInfo.religion}
                fullWidth
                InputProps={{
                  disableUnderline: true,
                }}
                InputLabelProps={{
                  style: {
                    paddingTop: '5px',
                    paddingLeft: '20px',
                    color: '#bdbdbd',
                    textTransform: 'none',
                    fontSize: '15px',
                    shrink: 'false',
                  },
                }}
                sx={{
                  color: 'secondary',
                  paddingLeft: '18px',
                  paddingBottom: '5px',
                  // minWidth:'100%',
                  border: 1,
                  borderColor: '#bdbdbd',
                  borderRadius: '3px',
                }}
                select
              >
                <MenuItem value="Female">Hindu</MenuItem>
              </TextField>
              <TextField
                id="standard-basic"
                label="Caste"
                variant="filled"
                type="number"
                name="caste"
                onChange={handleChange}
                value={religionInfo.caste}
                fullWidth
                InputProps={{
                  disableUnderline: true,
                }}
                InputLabelProps={{
                  style: {
                    paddingTop: '5px',
                    paddingLeft: '20px',
                    color: '#bdbdbd',
                    textTransform: 'none',
                    fontSize: '15px',
                    shrink: 'false',
                  },
                }}
                sx={{
                  marginLeft: '30px',
                  color: 'secondary',
                  paddingLeft: '18px',
                  paddingBottom: '5px',
                  // minWidth:'100%',
                  border: 1,
                  borderColor: '#bdbdbd',
                  borderRadius: '3px',
                }}
                select
              >
                <MenuItem value="Female">Brahmin</MenuItem>
              </TextField>
              <TextField
                id="standard-basic"
                label="Subcaste"
                variant="filled"
                name="subcaste"
                onChange={handleChange}
                value={religionInfo.subcaste}
                fullWidth
                InputProps={{
                  disableUnderline: true,
                }}
                InputLabelProps={{
                  style: {
                    paddingTop: '5px',
                    paddingLeft: '20px',
                    color: '#bdbdbd',
                    textTransform: 'none',
                    fontSize: '15px',
                    shrink: 'false',
                  },
                }}
                sx={{
                  marginLeft: '30px',
                  color: 'secondary',
                  paddingLeft: '18px',
                  paddingBottom: '5px',
                  // minWidth:'100%',
                  border: 1,
                  borderColor: '#bdbdbd',
                  borderRadius: '3px',
                }}
                select
              >
                <MenuItem value="Ms">Bengali</MenuItem>
                <MenuItem value="Ms">Pahadi</MenuItem>
                <MenuItem value="Shri">Kanyakubja</MenuItem>
                <MenuItem value="Ms">Maithil</MenuItem>
                <MenuItem value="Smt">Saryupareen</MenuItem>
                <MenuItem value="Ms">Mohyal</MenuItem>
                <MenuItem value="Ms">Bhumihar</MenuItem>
                <MenuItem value="Ms">Babhan</MenuItem>
                <MenuItem value="Ms">Pashchima Brahmin</MenuItem>
                <MenuItem value="Ms">Sanadhya</MenuItem>
                <MenuItem value="Ms">Shakaldweepi</MenuItem>
                <MenuItem value="Ms">Kulin Brahmin</MenuItem>
                <MenuItem value="Ms">Utkal Brahmin</MenuItem>
                <MenuItem value="Ms">Aadi gour</MenuItem>
                <MenuItem value="Ms">Saraswat</MenuItem>
                <MenuItem value="Ms">Mahabrahmin</MenuItem>
                <MenuItem value="Ms">Namboodiri</MenuItem>
                <MenuItem value="Ms">Ayyar</MenuItem>
                <MenuItem value="Ms">Tyagi</MenuItem>
                <MenuItem value="Ms">Ayangar</MenuItem>
              </TextField>
            </Box>
            {/* <center>
                              <Button onClick={handleClick}>NEXT</Button>
                        </center> */}
          </Box>


// Preferences

<Box>
        {/* <Divider
          variant="middle"
          sx={{
            marginBottom: "30px",
            border: "1px dashed blue",
          }}
        /> */}

        <Box
          sx={{
            display: 'flex',
            marginBottom: '30px',
          }}
        >
          <TextField
            id="standard-basic"
            label="Marital Status"
            variant="filled"
            lg={4}
            md={6}
            sm={12}
            name="maritalStatus"
            onChange={handleChange}
            value={preferenceInfo.maritalStatus}
            fullWidth
            InputProps={{
              disableUnderline: true,
            }}
            InputLabelProps={{
              style: {
                paddingTop: '5px',
                paddingLeft: '20px',
                color: '#bdbdbd',
                textTransform: 'none',
                fontSize: '15px',
                shrink: 'false',
              },
            }}
            sx={{
              color: 'secondary',
              paddingLeft: '18px',
              paddingBottom: '5px',
              // minWidth:'100%',
              border: 1,
              borderColor: '#bdbdbd',
              borderRadius: '3px',
            }}
            select
          >
            <MenuItem value="Never Married">Never Married</MenuItem>
            <MenuItem value="Widow">Widow</MenuItem>
            <MenuItem value="Divorced">Divorced</MenuItem>
          </TextField>
          <Box
            width="100%"
            sx={{
              marginLeft: '30px',
            }}
          >
            <TextField
              id="standard-basic"
              label="Age"
              variant="filled"
              name="age"
              onChange={handleChange}
              value={preferenceInfo.age}
              fullWidth
              InputProps={{
                disableUnderline: true,
              }}
              InputLabelProps={{
                style: {
                  paddingTop: '5px',
                  paddingLeft: '20px',
                  color: '#bdbdbd',
                  textTransform: 'none',
                  fontSize: '15px',
                  shrink: 'false',
                },
              }}
              sx={{
                //   marginLeft: "30px",
                color: 'secondary',
                paddingLeft: '18px',
                paddingBottom: '5px',
                // minWidth:'100%',
                border: 1,
                borderColor: '#bdbdbd',
                borderRadius: '3px',
              }}
              select
            >
              <MenuItem value="Never Married">25-29</MenuItem>
              <MenuItem value="Widow">30-32</MenuItem>
              <MenuItem value="Divorced">32-35</MenuItem>
              <MenuItem value="35+">35+</MenuItem>
            </TextField>
          </Box>

          <Box
            width="100%"
            sx={{
              marginLeft: '30px',
            }}
          >
            <TextField
              id="standard-basic"
              label="Weight"
              variant="filled"
              type="number"
              name="weight"
              onChange={handleChange}
              value={preferenceInfo.weight}
              fullWidth
              InputProps={{
                disableUnderline: true,
              }}
              InputLabelProps={{
                style: {
                  paddingTop: '5px',
                  paddingLeft: '20px',
                  color: '#bdbdbd',
                  textTransform: 'none',
                  fontSize: '15px',
                  shrink: 'false',
                },
              }}
              sx={{
                //   marginLeft: "30px",
                color: 'secondary',
                paddingLeft: '18px',
                paddingBottom: '5px',
                // minWidth:'100%',
                border: 1,
                borderColor: '#bdbdbd',
                borderRadius: '3px',
              }}
              select
            >
              <MenuItem value="Never Married">40-50</MenuItem>
              <MenuItem value="Widow">50-55</MenuItem>
              <MenuItem value="Divorced">55-65</MenuItem>
              <MenuItem value="35+">65-75</MenuItem>
              <MenuItem value="35+">75-90</MenuItem>
              <MenuItem value="35+">90+</MenuItem>
            </TextField>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            marginBottom: '30px',
          }}
        >
          <TextField
            id="standard-basic"
            label="Height"
            variant="filled"
            name="height"
            onChange={handleChange}
            value={preferenceInfo.height}
            fullWidth
            InputProps={{
              disableUnderline: true,
            }}
            InputLabelProps={{
              style: {
                paddingTop: '5px',
                paddingLeft: '20px',
                color: '#bdbdbd',
                textTransform: 'none',
                fontSize: '15px',
                shrink: 'false',
              },
            }}
            sx={{
              //   marginLeft:'30px',
              color: 'secondary',
              paddingLeft: '18px',
              paddingBottom: '5px',
              // minWidth:'100%',
              border: 1,
              borderColor: '#bdbdbd',
              borderRadius: '3px',
            }}
            select
          >
            <MenuItem value="Shri">Shri</MenuItem>
            <MenuItem value="Smt">Smt</MenuItem>
            <MenuItem value="Ms">Ms</MenuItem>
          </TextField>
          <Box
            width="100%"
            sx={{
              marginLeft: '30px',
            }}
          />

          <Box
            width="100%"
            sx={{
              marginLeft: '30px',
            }}
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            marginBottom: '30px',
          }}
        >
          <TextField
            id="standard-basic"
            label="Religion"
            variant="filled"
            type="text"
            lg={4}
            md={6}
            sm={12}
            name="religion"
            onChange={handleChange}
            value={preferenceInfo.religion}
            fullWidth
            InputProps={{
              disableUnderline: true,
            }}
            InputLabelProps={{
              style: {
                paddingTop: '5px',
                paddingLeft: '20px',
                color: '#bdbdbd',
                textTransform: 'none',
                fontSize: '15px',
                shrink: 'false',
              },
            }}
            sx={{
              color: 'secondary',
              paddingLeft: '18px',
              paddingBottom: '5px',
              // minWidth:'100%',
              border: 1,
              borderColor: '#bdbdbd',
              borderRadius: '3px',
            }}
            select
          >
            <MenuItem value="Female">Hindu</MenuItem>
          </TextField>
          <Box
            width="100%"
            sx={{
              marginLeft: '30px',
            }}
          >
            <TextField
              id="standard-basic"
              label="Caste"
              variant="filled"
              type="number"
              name="caste"
              onChange={handleChange}
              value={preferenceInfo.caste}
              fullWidth
              InputProps={{
                disableUnderline: true,
              }}
              InputLabelProps={{
                style: {
                  paddingTop: '5px',
                  paddingLeft: '20px',
                  color: '#bdbdbd',
                  textTransform: 'none',
                  fontSize: '15px',
                  shrink: 'false',
                },
              }}
              sx={{
                //   marginLeft: "30px",
                color: 'secondary',
                paddingLeft: '18px',
                paddingBottom: '5px',
                // minWidth:'100%',
                border: 1,
                borderColor: '#bdbdbd',
                borderRadius: '3px',
              }}
              select
            >
              <MenuItem value="Female">Brahmin</MenuItem>
            </TextField>
          </Box>
          <Box
            width="100%"
            sx={{
              marginLeft: '30px',
            }}
          >
            <TextField
              id="standard-basic"
              label="Subcaste"
              variant="filled"
              name="subCaste"
              onChange={handleChange}
              value={preferenceInfo.subCaste}
              fullWidth
              InputProps={{
                disableUnderline: true,
              }}
              InputLabelProps={{
                style: {
                  paddingTop: '5px',
                  paddingLeft: '20px',
                  color: '#bdbdbd',
                  textTransform: 'none',
                  fontSize: '15px',
                  shrink: 'false',
                },
              }}
              sx={{
                //   marginLeft: "30px",
                color: 'secondary',
                paddingLeft: '18px',
                paddingBottom: '5px',
                // minWidth:'100%',
                border: 1,
                borderColor: '#bdbdbd',
                borderRadius: '3px',
              }}
              select
            >
              <MenuItem value="Ms">Bengali</MenuItem>
              <MenuItem value="Ms">Pahadi</MenuItem>
              <MenuItem value="Shri">Kanyakubja</MenuItem>
              <MenuItem value="Ms">Maithil</MenuItem>
              <MenuItem value="Smt">Saryupareen</MenuItem>
              <MenuItem value="Ms">Mohyal</MenuItem>
              <MenuItem value="Ms">Bhumihar</MenuItem>
              <MenuItem value="Ms">Babhan</MenuItem>
              <MenuItem value="Ms">Pashchima Brahmin</MenuItem>
              <MenuItem value="Ms">Sanadhya</MenuItem>
              <MenuItem value="Ms">Shakaldweepi</MenuItem>
              <MenuItem value="Ms">Kulin Brahmin</MenuItem>
              <MenuItem value="Ms">Utkal Brahmin</MenuItem>
              <MenuItem value="Ms">Aadi gour</MenuItem>
              <MenuItem value="Ms">Saraswat</MenuItem>
              <MenuItem value="Ms">Mahabrahmin</MenuItem>
              <MenuItem value="Ms">Namboodiri</MenuItem>
              <MenuItem value="Ms">Ayyar</MenuItem>
              <MenuItem value="Ms">Tyagi</MenuItem>
              <MenuItem value="Ms">Ayangar</MenuItem>
            </TextField>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            marginBottom: '30px',
          }}
        >
          <TextField
            id="standard-basic"
            label="Education"
            variant="filled"
            lg={4}
            md={6}
            sm={12}
            name="education"
            onChange={handleChange}
            value={preferenceInfo.education}
            fullWidth
            InputProps={{
              disableUnderline: true,
            }}
            InputLabelProps={{
              style: {
                paddingTop: '5px',
                paddingLeft: '20px',
                color: '#bdbdbd',
                textTransform: 'none',
                fontSize: '15px',
                shrink: 'false',
              },
            }}
            sx={{
              color: 'secondary',
              paddingLeft: '18px',
              paddingBottom: '5px',
              // minWidth:'100%',
              border: 1,
              borderColor: '#bdbdbd',
              borderRadius: '3px',
            }}
            select
          >
            <MenuItem value="Never Married">Diploma</MenuItem>
            <MenuItem value="Widow">Graduate</MenuItem>
            <MenuItem value="Divorced">Post Graduate</MenuItem>
          </TextField>
          <Box
            width="100%"
            sx={{
              marginLeft: '30px',
            }}
          />
          <Box
            width="100%"
            sx={{
              marginLeft: '30px',
            }}
          >
            <TextField
              id="standard-basic"
              label="Employed In"
              variant="filled"
              type="number"
              name="employedIn"
              onChange={handleChange}
              value={preferenceInfo.employedIn}
              fullWidth
              InputProps={{
                disableUnderline: true,
              }}
              InputLabelProps={{
                style: {
                  paddingTop: '5px',
                  paddingLeft: '20px',
                  color: '#bdbdbd',
                  textTransform: 'none',
                  fontSize: '15px',
                  shrink: 'false',
                },
              }}
              sx={{
                //     marginLeft: "30px",
                color: 'secondary',
                paddingLeft: '18px',
                paddingBottom: '5px',
                // minWidth:'100%',
                border: 1,
                borderColor: '#bdbdbd',
                borderRadius: '3px',
              }}
              select
            >
              <MenuItem value="Shri">Government/ PSU</MenuItem>
              <MenuItem value="Smt">Private</MenuItem>
              <MenuItem value="Ms">Business</MenuItem>
              <MenuItem value="Ms">Defence</MenuItem>
              <MenuItem value="Ms">Self Employed</MenuItem>
              <MenuItem value="Ms">Not Working</MenuItem>
            </TextField>
          </Box>
        </Box>

        {/* <center>
          <Button onClick={handleClick}>NEXT</Button>
        </center> */}
      </Box>