/** 

=========================================================
* Open Delivery Bot React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/vision-ui-dashboard-pro-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com/)

* Design and Coded by Simmmple & Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Visionware.

*/

import { useState } from "react";

// @mui material components
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
// Vision UI Dashboard PRO React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

// Pricing page components
import FaqCollapse from "layouts/pages/pricing-page/components/FaqCollapse";

function Faq() {
  const [collapse, setCollapse] = useState(false);

  return (
    <VuiBox mt={{ sm: 10, xl: 16 }}>
      <Grid container justifyContent="center">
        <Grid item xs={12} lg={6} mb="40px">
          <VuiTypography fontSize={32} color="white" align="center" fontWeight="bold" gutterBottom>
            Frequently Asked Questions
          </VuiTypography>
          <VuiBox mb={2}>
            <VuiTypography
              fontSize={16}
              fontWeight="regular"
              color="white"
              align="center"
              color="text"
            >
              A lot of people don&apos;t appreciate the moment until it’s passed.
              <br /> I&apos;m not trying my hardest, and I&apos;m not trying to do
            </VuiTypography>
          </VuiBox>
        </Grid>
        <Grid item xs={12} md={10}>
          <FaqCollapse
            title="How do I order?"
            open={collapse === 1}
            onClick={() => (collapse === 1 ? setCollapse(false) : setCollapse(1))}
          >
            We’re not always in the position that we want to be at. We’re constantly growing. We’re
            constantly making mistakes. We’re constantly trying to express ourselves and actualize
            our dreams. If you have the opportunity to play this game of life you need to appreciate
            every moment. A lot of people don’t appreciate the moment until it’s passed.
          </FaqCollapse>
          <Divider light />
          <FaqCollapse
            title="How can i make the payment?"
            open={collapse === 2}
            onClick={() => (collapse === 2 ? setCollapse(false) : setCollapse(2))}
          >
            It really matters and then like it really doesn’t matter. What matters is the people who
            are sparked by it. And the people who are like offended by it, it doesn’t matter.
            Because it&apos;s about motivating the doers. Because I’m here to follow my dreams and
            inspire other people to follow their dreams, too. We’re not always in the position that
            we want to be at. We’re constantly growing. We’re constantly making mistakes. We’re
            constantly trying to express ourselves and actualize our dreams. If you have the
            opportunity to play this game of life you need to appreciate every moment. A lot of
            people don’t appreciate the moment until it’s passed.
          </FaqCollapse>
          <Divider light />
          <FaqCollapse
            title="How much time does it take to receive the order?"
            open={collapse === 3}
            onClick={() => (collapse === 3 ? setCollapse(false) : setCollapse(3))}
          >
            The time is now for it to be okay to be great. People in this world shun people for
            being great. For being a bright color. For standing out. But the time is now to be okay
            to be the greatest you. Would you believe in what you believe in, if you were the only
            one who believed it? If everything I did failed - which it doesn&apos;t, it actually
            succeeds - just the fact that I&apos;m willing to fail is an inspiration. People are so
            scared to lose that they don&apos;t even try. Like, one thing people can&apos;t say is
            that I&apos;m not trying, and I&apos;m not trying my hardest, and I&apos;m not trying to
            do the best way I know how.
          </FaqCollapse>
          <Divider light />
          <FaqCollapse
            title="Can I resell the products?"
            open={collapse === 4}
            onClick={() => (collapse === 4 ? setCollapse(false) : setCollapse(4))}
          >
            I always felt like I could do anything. That’s the main thing people are controlled by!
            Thoughts- their perception of themselves! They&apos;re slowed down by their perception
            of themselves. If you&apos;re taught you can’t do anything, you won’t do anything. I was
            taught I could do everything.
            <br />
            <br />
            If everything I did failed - which it doesn&apos;t, it actually succeeds - just the fact
            that I&apos;m willing to fail is an inspiration. People are so scared to lose that they
            don&apos;t even try. Like, one thing people can&apos;t say is that I&apos;m not trying,
            and I&apos;m not trying my hardest, and I&apos;m not trying to do the best way I know
            how.
          </FaqCollapse>
          <Divider light />
          <FaqCollapse
            title="Where do I find the shipping details?"
            open={collapse === 5}
            onClick={() => (collapse === 5 ? setCollapse(false) : setCollapse(5))}
          >
            There’s nothing I really wanted to do in life that I wasn’t able to get good at. That’s
            my skill. I’m not really specifically talented at anything except for the ability to
            learn. That’s what I do. That’s what I’m here for. Don’t be afraid to be wrong because
            you can’t learn anything from a compliment. I always felt like I could do anything.
            That’s the main thing people are controlled by! Thoughts- their perception of
            themselves! They&apos;re slowed down by their perception of themselves. If you&apos;re
            taught you can’t do anything, you won’t do anything. I was taught I could do everything.
          </FaqCollapse>
          <Divider light />
        </Grid>
      </Grid>
    </VuiBox>
  );
}

export default Faq;
