import {
  Box,
  Button,
  Checkbox,
  Container,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { NavLink } from "react-router-dom";

const Signup = () => {
  return (
    <>
      <Box
        component="main"
        sx={{
          marginTop: "120px",
          alignItems: "center",
          display: "flex",
          flexGrow: 1,
          minHeight: "100%",
        }}
      >
        <Container maxWidth="sm">
          <form>
            <Box sx={{ my: 3 }}>
              <Typography color="textPrimary" variant="h4">
                Create a new account
              </Typography>
              <Typography color="textSecondary" gutterBottom variant="body2">
                Use your email to create a new account
              </Typography>
            </Box>
            <TextField
              //   error={Boolean(formik.touched.firstName && formik.errors.firstName)}
              fullWidth
              //   helperText={formik.touched.firstName && formik.errors.firstName}
              label="First Name"
              margin="normal"
              name="firstName"
              //   onBlur={formik.handleBlur}
              //   onChange={formik.handleChange}
              //   value={formik.values.firstName}
              variant="outlined"
            />
            <TextField
              //   error={Boolean(formik.touched.lastName && formik.errors.lastName)}
              fullWidth
              //   helperText={formik.touched.lastName && formik.errors.lastName}
              label="Last Name"
              margin="normal"
              name="lastName"
              //   onBlur={formik.handleBlur}
              //   onChange={formik.handleChange}
              //   value={formik.values.lastName}
              variant="outlined"
            />
            <TextField
              //   error={Boolean(formik.touched.email && formik.errors.email)}
              fullWidth
              //   helperText={formik.touched.email && formik.errors.email}
              label="Email Address"
              margin="normal"
              name="email"
              //   onBlur={formik.handleBlur}
              //   onChange={formik.handleChange}
              type="email"
              //   value={formik.values.email}
              variant="outlined"
            />
            <TextField
              //   error={Boolean(formik.touched.password && formik.errors.password)}
              fullWidth
              //   helperText={formik.touched.password && formik.errors.password}
              label="Password"
              margin="normal"
              name="password"
              //   onBlur={formik.handleBlur}
              //   onChange={formik.handleChange}
              type="password"
              //   value={formik.values.password}
              variant="outlined"
            />
            <Box
              sx={{
                alignItems: "center",
                display: "flex",
                ml: -1,
              }}
            >
              <Checkbox
                // checked={formik.values.policy}
                name="policy"
                // onChange={formik.handleChange}
              />
              <Typography color="textSecondary" variant="body2">
                I have read the{" "}
                <NavLink to="#" passHref>
                  <Link color="primary" underline="always" variant="subtitle2">
                    Terms and Conditions
                  </Link>
                </NavLink>
              </Typography>
            </Box>

            <Box sx={{ py: 2 }}>
              <Button
                disableElevation
                style={{
                    padding:'15px',
                  background: "var(--primary)",
                }}
                // disabled={formik.isSubmitting}
                fullWidth
                size="large"
                type="submit"
                variant="contained"
              >
                Sign Up
              </Button>
            </Box>
            <Typography color="textSecondary" variant="body2">
              Have an account?{" "}
              <NavLink to="/login" passHref>
                <Link variant="subtitle2" underline="hover">
                  Sign In
                </Link>
              </NavLink>
            </Typography>
          </form>
        </Container>
      </Box>
    </>
  );
};

export default Signup;
