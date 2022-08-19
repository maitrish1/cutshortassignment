import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import StepForm from "./components/StepForm";
import Cards from "./components/Cards";
import PersonIcon from "@mui/icons-material/Person";
import GroupsIcon from "@mui/icons-material/Groups";
import { display, Stack } from "@mui/system";
import Header from "./components/Header";
import SmallHeader from "./components/SmallHeader";
import Workspace from "./components/Workspace";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import img1 from './components/new_logo_half.webp'
export default function StepperForm() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [isCardClicked, setisCardClicked] = React.useState({
    which:'',
    
  });
  function getSteps() {
    return ["step 1", "step 2", "step 3", "step4"];
  }
  function getStepContent(step) {
    switch (step) {
      case 0:
        return (
          <Stack
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            mb={3}
          >
            <Stack alignItems="center">
              <Header desc={"Welcome! First things first..."} />
              <SmallHeader desc={"You can always change them"} />
            </Stack>

            <StepForm
              firstField={"Full Name"}
              secondField={"Display Name"}
              firstPlaceholder={"Steve Jobs"}
              secondPlaceholder={"Steve"}
            />
           
          </Stack>
        );

      case 1:
        return (
          <Stack
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            mb={3}
          >
            <Stack alignItems="center">
              <Header desc={"Let's set up a home for all your work"} />
              <SmallHeader
                desc={"You can always create another workspace later."}
              />
            </Stack>

            <StepForm
              inputprops={{
                startAdornment: (
                  <Box
                    sx={{
                      bgcolor: "#f5f5f5",
                      height: "100%",
                      display: "flex",
                      alignItems: "center",
                      color: "gray",
                    }}
                  >
                    www.eden.com/
                  </Box>
                ),
              }}
              firstField={"Workspace Name"}
              secondField={"Workspace URL"}
              firstPlaceholder={"Eden"}
              secondPlaceholder={"Example"}
            />
           
          </Stack>
        );
      case 2:
        return (
          <Stack
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            gap={4.6}
            mb={3}
          >
            <Stack alignItems="center">
              <Header desc={"How are you planning to use Eden?"} />
              <SmallHeader
                desc={"We'll streamline your experience accordingly."}
              />
            </Stack>

            <Stack direction="row" gap={4}>
              <div style={{border:`${isCardClicked.which=='one'?'2px solid #664de5':''}`,borderRadius:'5px'}} onClick={() => setisCardClicked({...isCardClicked,which:'one'})}>
                <Cards
                  // click={isCardClicked}
                  icon={<PersonIcon sx={{ fontSize: 35 }} />}
                  usefor={"For Myself"}
                  desc={"Write better. Think more clearly. Stay organized"}
                />
              </div>

              <div style={{border:`${isCardClicked.which=='two'?'2px solid #664de5':''}`, borderRadius:'5px'}} onClick={() => setisCardClicked({...isCardClicked,which:'two'})}>
                <Cards
                  // click={isCardClicked}
                  icon={<GroupsIcon sx={{ fontSize: 35 }} />}
                  usefor={"With my team"}
                  desc={"Wikis, docs, tasks & projects, all in one place"}
                />
              </div>
            </Stack>

           
          </Stack>
        );
      case 3:
        return (
          <Stack
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            gap={4.6}
            mb={3}
          >
            <CheckCircleIcon sx={{ fontSize: "90px", marginY: "42px" }} />
            <Stack alignItems="center">
              <Header desc={"How are you planning to use Eden?"} />
              <SmallHeader
                desc={"We'll streamline your experience accordingly."}
              />
            </Stack>

            
          </Stack>
        );
      default:
        return "unknown step";
    }
  }
  const steps = getSteps();
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleReset = () => {
    setActiveStep(0);
  };
  return (
    <Box
      sx={{
        width: {lg:'50vw',md:'70vw',sm:'60vw',xs:"90vw"},
        height:'100vh',
        display: "flex",
        flexDirection: "column",
        gap: {xs:'20px', sm:'40px', md:'50px', lg:'60px'},
        alignItems: "center",
        // bgcolor:"blue",
        justifyContent:'center'
      }}
    >
      <img src={img1}/>
      <Stepper sx={{ width: {lg:'50vw',md:'40vw',sm:'60vw',xs:'80vw'} }} activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {activeStep === steps.length ? (
          <div>
            All steps completed
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {getStepContent(activeStep)}
            <Stack gap={3} direction="row">
              {/* <Button
                sx={{ bgcolor: "#664de5", textTransform: "none" }}
                variant="contained"
                onClick={handleNext}
              >
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button> */}
              <Workspace handleNext={handleNext}/>
            </Stack>
          </div>
        )}
      </div>
    </Box>
  );
}
