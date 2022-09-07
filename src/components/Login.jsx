import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { FaChevronRight, FaFacebook, FaGoogle } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <>
      <Box
        component="main"
        sx={{
          marginTop: "150px",
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
                Sign in to Your Account
              </Typography>
            </Box>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Button
                  disableElevation
                  style={{ background: "black" }}
                  fullWidth
                  startIcon={<FaFacebook />}
                  size="large"
                  variant="contained"
                >
                  Login with Facebook
                </Button>
              </Grid>
              <Grid item xs={12} md={6}>
                <Button
                  disableElevation
                  fullWidth
                  style={{ background: "#c5c5c5", color: "black" }}
                  startIcon={<FaGoogle />}
                  size="large"
                  variant="contained"
                >
                  Login with Google
                </Button>
              </Grid>
            </Grid>
            <Box
              sx={{
                pb: 1,
                pt: 3,
              }}
            >
              <Typography align="center" color="textSecondary" variant="body1">
                or login
              </Typography>
            </Box>
            <TextField
              // error={Boolean(formik.touched.email && formik.errors.email)}
              fullWidth
              // helperText={formik.touched.email && formik.errors.email}
              label="Email Address"
              margin="normal"
              name="email"
              // onBlur={formik.handleBlur}
              // onChange={formik.handleChange}
              type="email"
              // value={formik.values.email}
              variant="outlined"
            />
            <TextField
              // error={Boolean(formik.touched.password && formik.errors.password)}
              fullWidth
              // helperText={formik.touched.password && formik.errors.password}
              label="Password"
              margin="normal"
              name="password"
              // onBlur={formik.handleBlur}
              // onChange={formik.handleChange}
              type="password"
              // value={formik.values.password}
              variant="outlined"
            />
            <Box sx={{ py: 2 }}>
              <Button
                style={{background:"var(--secondary)", padding:"15px"}}
                // disabled={formik.isSubmitting}
                fullWidth
                size="large"
                type="submit"
                variant="contained"
              >
                Sign In
              </Button>
            </Box>
            <Typography color="textSecondary" variant="body2">
              Don't have an account?
              <NavLink to="/register">
                <Link
                  to="/register"
                  variant="subtitle2"
                  underline="hover"
                  sx={{
                    cursor: "pointer",
                  }}
                >
                  Sign Up
                </Link>
              </NavLink>
            </Typography>
          </form>
        </Container>
      </Box>
    </>
  );
};

export default Login;
