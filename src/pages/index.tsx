import { FC } from 'react';
import Head from 'next/head';
import { Box, Button, Heading, Image, Main, Paragraph, Text } from 'grommet';
import { Navbar } from 'components/Navbar';
import { Footer } from 'components/Footer';
import { Feature } from 'components/Feature';

const Home: FC = () => (
  <div>
    <Head>
      <title>Healfit</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Box>
      <Navbar />

      <Main direction="column" align="center" pad={{ vertical: 'large' }}>
        <Box direction="column" align="center" pad={{ vertical: 'small', horizontal: 'xlarge' }}>
          <Heading size="large" textAlign="center">
            Your health <br />
            deserves better.
          </Heading>
          <Text size="large">Create your meal plan. Track your progress. Get fitter.</Text>
          <Button
            primary
            margin={{ vertical: 'medium' }}
            href="/api/auth/login"
            label="Start Now"
            size="large"
          />
        </Box>
        <Box pad={{ vertical: 'large', horizontal: 'xlarge' }}>
          <Image
            width="420px"
            src="https://uploads-ssl.webflow.com/5e3c7a535a0b8ce5f3926ef8/5ffee912400bc83aab6e46bd_Mockup-3.png"
          />
        </Box>

        <Box
          pad={{ vertical: 'large', horizontal: 'large' }}
          align="center"
          background="light-2"
          width="100%"
        >
          <Heading size="small">Healfit helps you stay on track with your goals</Heading>
          <Text textAlign="center">
            Your health is important and it all starts from the food you eat.
            <br />
            At Healfit we are committed in offering you the best tools to plan your meals and stay
            on track.
          </Text>
        </Box>

        <Box pad={{ vertical: 'xlarge', horizontal: 'large' }} width={{ max: '80vw' }}>
          <Feature
            title="Links, Content & Community. One online homepage."
            text="Say goodbye to boring link pages. Znap organises your links into visual widgets that
        skyrocket your clicks."
            image="https://uploads-ssl.webflow.com/5e3c7a535a0b8ce5f3926ef8/5ffeed57c996ee8019b50f2d_mockup-4.png"
          />

          <Feature
            direction="row-reverse"
            title="No website? No problem. Close the gap between platforms."
            text="Upload your educational content. Allow your audience to search, organise and save your posts. 🚀"
            image="https://uploads-ssl.webflow.com/5e3c7a535a0b8ce5f3926ef8/5fff233c6e9e7963bdf843bd_Mockeup-5.png"
          />

          <Feature
            title="Quick to set up. Impossible to mess up."
            text="Znap doesn't let you mess with the appearance of your page. This saves you time, and means your links are always looking good. 🚀"
            image="https://uploads-ssl.webflow.com/5e3c7a535a0b8ce5f3926ef8/5fff3435de0af135a0bc609d_image-3.png"
          />
        </Box>
      </Main>

      <Footer />
    </Box>
  </div>
);

export default Home;