// Import React
import React from 'react';
/* eslint import/no-webpack-loader-syntax: off */
// Import Spectacle Core tags
import {
  BlockQuote,
  Image,
  Cite,
  Code,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
} from 'spectacle';
import CodeSlide from "spectacle-code-slide/src/CodeSlide";
// Import theme
import { theme, colors } from './theme';

const images = {
  background: require("./assets/background.jpg"),
  physicalworld: require("./assets/physicalworld.jpg"),
  future: require("./assets/future-city.jpg"),
  connection: require("./assets/iotbackground.jpg"),
  toilet: require("./assets/toilet.jpg"),
  toothbrush: require("./assets/kolibree-smart-toothbrush-xl.jpg"),
  code: require("./assets/code-background.png"),
  cloud: require("./assets/iot-cloud.jpg"),
  network: require("./assets/network.png"),
  bluetooth: require("./assets/bluetooth.png"),
  bluetoothRunes: require('./assets/bluetooth.jpg'),
  bleChip: require("./assets/bleChip.png"),
  proximityApi: require("./assets/proximityapi.png"),
  sniffing: require("./assets/ble_sniffing.jpg"),
  hacking: require("./assets/hacking.jpg"),
  background: require("./assets/background.jpg"),
  physicalworld: require("./assets/physicalworld.jpg"),
  future: require("./assets/future-city.jpg"),
  connection: require("./assets/iotbackground.jpg"),
  toilet: require("./assets/toilet.jpg"),
  toothbrush: require("./assets/kolibree-smart-toothbrush-xl.jpg"),
  code: require("./assets/code-background.png"),
  cloud: require("./assets/iot-cloud.jpg"),
  network: require("./assets/network.png"),
  bluetooth: require("./assets/bluetooth.png"),
  bleChip: require("./assets/bleChip.png"),
  proximityApi: require("./assets/proximityapi.png"),
  sniffing: require("./assets/ble_sniffing.jpg"),
  book: require("./assets/book.png"),
  bookQR: require("./assets/bookQR.png"),
  smartHome: require("./assets/smart-home.jpg"),
  letusin: require("./assets/funnyletusin.jpg"),
  smartHomebg: require("./assets/smarthomesbg.jpg"),
  smarthomeHouse: require("./assets/smarthomeHouse.png"),
  brands: require("./assets/brands.png"),
  bridge: require("./assets/bridge.jpg"),
  huearchitecture: require("./assets/huearchitecture.jpg"),
  arp: require("./assets/arp.png"),
  arpresult: require("./assets/arpresult.png"),
  mhr1: require("./assets/mhr1.png"),
  mhr2: require("./assets/mhr2.png"),
  mhr3: require("./assets/mhr3.png"),
  if1: require("./assets/if1.png"),
  if2: require("./assets/if2.png"),
  if3: require("./assets/if3.png"),
  codeBg: require("./assets/code-background.png"),
  reverse: require("./assets/reverse.png"),
  adafruit: require("./assets/adafruitsniffsoft.png"),
  ubertooth: require("./assets/ubertooth.png"),
  androidLog: require("./assets/android-log.png"),
  qrForm: require("./assets/qrForm.png")
}

const bgSlideProps = {
  bgImage: images.background,
  bgDarken: .5,
  transition: ['slide']
}

const headerProps = {
  size: 1,
  fit: true,
  lineHeight: 2,
  textColor: 'secondary'
}

const listItemProps = {
  style: {fontSize: 30,margin: 16}
}

export default class Presentation extends React.Component {

  state = {
    bridgeIp: ''
  }

  async componentDidMount(){
    const blob = await fetch('https://www.meethue.com/api/nupnp');
    const response = await blob.json();
    this.setState({
      bridgeIp: response.length > 0 ? response[0].internalipaddress : ''
    })
  }

  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide {...bgSlideProps} transition={['appear']} >
          <Heading { ...headerProps }>
            Controlling your smart home devices
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            with React Native
          </Text>
        </Slide>
        <Slide {...bgSlideProps}>
          <Heading size={3} lineHeight={1} textColor="secondary">
            @VladimirNovick
          </Heading>
          <Text textColor="tertiary" size={3}>Independent Consultant</Text>
          <Text textColor="tertiary">web/mobile/vr/ar/iot</Text>
          <Text textColor="quartenary">
            vnovick.com
          </Text>
        </Slide>
        <Slide {...bgSlideProps} bgImage={images.physicalworld} bgDarken={.2}>
          <Heading size={3} lineHeight={1} textColor="secondary">
            How to connect to physical world devices
          </Heading>
        </Slide>
        <Slide {...bgSlideProps} bgImage={images.connection} bgDarken={.4}>
          <Heading size={4} lineHeight={1} textColor="secondary" italic>
            Everything is getting connected
          </Heading>
        </Slide>
        <Slide bgImage={images.connection} bgDarken={.4}>
          <Image width="100%" src={images.toilet}/>
        </Slide>
        <Slide bgImage={images.connection} bgDarken={.4}>
          <Image width="100%" src={images.toothbrush}/>
        </Slide>
        <Slide {...bgSlideProps} >
          <Heading { ...headerProps }>
            What is an IoT device
          </Heading>
          <Cite style={{fontSize: 36}} textColor="secondary">
            An object that can exchange or send data over internet
          </Cite>
        </Slide>
        <Slide {...bgSlideProps} >
          <Cite  textColor="secondary">
          Pretty much any physical object can be transformed into an IoT device if it can be connected to the internet and controlled that way.
          </Cite>
        </Slide>
        <Slide {...bgSlideProps} bgImage={images.letusin}>
          <Heading { ...headerProps }>
            What are smart homes
          </Heading>
        </Slide>
        <Slide {...bgSlideProps}>
          <Image width="100%" src={images.smartHome} />
        </Slide>
        <Slide {...bgSlideProps } bgDarken={.3} bgImage={images.smartHomebg}>
          <Heading size={1} lineHeight={1} textColor="secondary">
            Smart homes
          </Heading>
        </Slide>
        <Slide {...bgSlideProps }>
          <Heading size={1} lineHeight={1} textColor="secondary">
            Agenda
          </Heading>
          <List>
            <ListItem {...listItemProps }>
              Control Wifi enabled devices with existing API
            </ListItem>
            <ListItem {...listItemProps }>
              Understand how Bluetooth low energy works
            </ListItem>
            <ListItem {...listItemProps}>
              Reverse engineer existing apps and protocols
            </ListItem>
            <ListItem {...listItemProps}>
              Control bluetooth enabled devices with React Native
            </ListItem>
          </List>
        </Slide>
        <Slide {...bgSlideProps } bgColor="primary" bgDarken={.4}>
          <Heading size={4} lineHeight={1} textColor="secondary" italic>
            Philips Hue
          </Heading>
          <Image src={images.huearchitecture} />
        </Slide>
        <Slide {...bgSlideProps} >
          <Heading { ...headerProps }>
            Let's get started with Philiphs Hue API
          </Heading>
          <List>
            <ListItem {...listItemProps}>Discover our bridge on local network</ListItem>
            <ListItem {...listItemProps}>Get user id</ListItem>
            <ListItem {...listItemProps}>Call api</ListItem>
          </List>
        </Slide>
        <Slide bgColor="primary" bgDarken={.4}>
          <Heading size={4} lineHeight={1} textColor="secondary">
            Find out your IP:
          </Heading>
          <Text textColor="secondary" textSize={28}>
            https://www.meethue.com/api/nupnp
          </Text>
          <iframe src="https://www.meethue.com/api/nupnp" width="100%" height="30px" style={{ border: 'none', maxWidth: "600px", backgroundColor: 'white', marginTop: '50px' }} />
        </Slide>
        <Slide>
          <Heading size={5} lineHeight={1} textColor="secondary">
            Access your Philips Hue Debug console
          </Heading>
          <Text textColor="secondary" textSize={28}>
            {`http://${this.state.bridgeIp}/debug/clip.html`}
          </Text>
          { this.state.bridgeIp && 
            <iframe src={`http://${this.state.bridgeIp}/debug/clip.html`} width="100%" height="800px" style={{ border: 'none', maxWidth: "600px" }} />
          }
        </Slide>
        <Slide {...bgSlideProps} >
          <Heading { ...headerProps }>
            What we will be building
          </Heading>
        </Slide>
        <Slide {...bgSlideProps} >
          <Heading { ...headerProps }>
            Workshop part 1 - Instructions
          </Heading>
          <List ordered type="1">
            <ListItem {...listItemProps} textColor="secondary" lineHeight={2}>
              Clone: <span style={{color: colors.lightBlue}} href="http://github.com/vnovick/repourl">http://github.com/vnovick/repourl</span>
            </ListItem>
            <ListItem style={{fontSize: 30, margin: 16}} textColor="secondary" lineHeight={2}>Search for bridges</ListItem>
            <ListItem style={{fontSize: 30, margin: 16}} textColor="secondary" lineHeight={2}>Connect bridge</ListItem>
            <ListItem style={{fontSize: 30, margin: 16}} textColor="secondary" lineHeight={2}>Authenticate and get your user</ListItem>
            <ListItem style={{fontSize: 30, margin: 16}} textColor="secondary" lineHeight={2}>Turn on lightbulb and change it's brightness</ListItem>
            <ListItem style={{fontSize: 30, margin: 16}} textColor="secondary" lineHeight={2}><span style={{color: colors.emphasize }}>Bonus: </span>change lightbulb colors</ListItem>
          </List>
        </Slide>
        <Slide {...bgSlideProps} >
          <Heading {...headerProps}>
            Understanding bluetooth
          </Heading>
        </Slide>
        <Slide {...bgSlideProps} >
          <Image width="60%" src={images.bluetooth} />
        </Slide>
        <Slide {...bgSlideProps}>
          <Heading { ...headerProps }>
            What is bluetooth
          </Heading>
          <Image width="100%" src={images.bluetoothRunes} />
        </Slide>
        <Slide {...bgSlideProps } bgDarken={.5}>
          <Heading {...headerProps}>What is Bluetooth Low Energy (BLE)</Heading>
          <List style={{ listStyle: "none" }}>
            <ListItem>
              <Text lineHeight={1.5} textColor="tertiary" italic>
                  Bluetooth Low Energy is part of Bluetooth 4.0 core
              </Text>
            </ListItem>
            <ListItem>
              <Text lineHeight={1.5} textColor="tertiary" italic>
                  Low power consumption - running a year on CR2032
              </Text>
            </ListItem>
            <ListItem>
              <Text lineHeight={1.5} textColor="tertiary" italic>
                  Low bandwidth - 5kb/s
              </Text>
            </ListItem>
            <ListItem>
              <Text lineHeight={1.5} textColor="tertiary" italic>
                  Low latency - 6 ms
              </Text>
            </ListItem>
            <ListItem>
              <Text lineHeight={1.5} textColor="tertiary" italic>
                Discoverable by bluetooth enabled devices
              </Text>
            </ListItem>
          </List>
        </Slide>
        <Slide {...bgSlideProps}>
          <Heading size={3} lineHeight={1} textColor="secondary">Terminology</Heading>
          <List style={{ listStyle: "none" }}>
            <ListItem><Text lineHeight={1.5} textColor="tertiary" italic>Peripherial - small low power device</Text></ListItem>
            <ListItem><Text lineHeight={1.5} textColor="tertiary" italic>Central - more powerful device</Text></ListItem>
            <ListItem><Text lineHeight={1.5} textColor="tertiary" italic>GAP - Generic Access Profile</Text></ListItem>
            <ListItem><Text lineHeight={1.5} textColor="tertiary" italic>GATT - Generic Attribute Profile</Text></ListItem>
          </List>
        </Slide>
        <Slide {...bgSlideProps}>
          <Heading size={4} lineHeight={3} textColor="secondary">GAP - Generic Access Profile</Heading>
          <Text size={3} lineHeight={1} textColor="tertiary" italic>Makes your peripherial visible and determines how devices can interact</Text>
          <Image style={{ marginTop: "2rem"}} src={require("./assets/microcontrollers_Advertising2.png")} />
        </Slide>
        <Slide {...bgSlideProps}>
          <Heading size={4} lineHeight={3} textColor="secondary">GATT - Topology</Heading>
          <Image src={require("./assets/microcontrollers_ConnectedTopology (1).png")}/>
        </Slide>
        <Slide {...bgSlideProps}>
          <Heading size={3} lineHeight={2} textColor="secondary">Services</Heading>
          <Heading size={4} textColor="tertiary" italic>Group functionality and expose <span style={{ color: "#f74c4f" }}>Characteristics</span></Heading>
        </Slide>
        <Slide {...bgSlideProps}>
          <Heading size={3} lineHeight={2} textColor="secondary">Characteristics</Heading>
          <Heading size={4} textColor="tertiary" italic>Expose data to <span style={{ color: "#f74c4f" }}>read</span>, <span style={{ color: "#f74c4f" }}>write</span> and <span style={{ color: "#f74c4f" }}>observe</span> </Heading>
        </Slide>
        <Slide {...bgSlideProps}>
          <Image src={require("./assets/ble_hierarchy.jpg")} />
        </Slide>
        <Slide {...bgSlideProps} >
          <Heading { ...headerProps }>
            So how do we connect if we don't have an api.
          </Heading>
        </Slide>
        <Slide {...bgSlideProps} bgImage={images.hacking}>
          <Image width="100%" src={images.reverse}/>
        </Slide>
        <Slide {...bgSlideProps} >
          <Heading { ...headerProps }>
            NRF connect app for basic reverse enginnering
          </Heading>
          <List>
            <ListItem {...listItemProps}>Discover bluetooth devices</ListItem>
            <ListItem {...listItemProps}>Get Services and Characteristics data</ListItem>
            <ListItem {...listItemProps}>Write characteristics from the app</ListItem>
            <ListItem {...listItemProps}>Ability to advertise</ListItem>
          </List>
        </Slide>
        <Slide {...bgSlideProps} >
          <Heading { ...headerProps }>
            Hardware sniffing
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            BLE sniffer, Ubertooth, High End sniffers
          </Text>
        </Slide>
        <Slide {...bgSlideProps}>
          <Heading { ...headerProps }>
            Adafruit BLE sniffer
          </Heading>
          <Image width="100%" src={images.adafruit} />
        </Slide>
        <Slide {...bgSlideProps} >
          <Heading { ...headerProps }>
           Linux CLI sniffing
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            hcitool, gattool
          </Text>
        </Slide>
        <Slide {...bgSlideProps} >
          <Heading { ...headerProps }>
            Ubertooth One Sniffing
          </Heading>
          <Image width="80%" src={images.ubertooth} />
        </Slide>
        <Slide {...bgSlideProps} >
          <Heading { ...headerProps } >
            Retrieving android hci-log
          </Heading>
        </Slide>
        <Slide {...bgSlideProps }>
          <Image width="50%" src={images.androidLog} />
        </Slide>
        <Slide {...bgSlideProps }>
          <Heading { ...headerProps } >
            Retrieving android hci-log
          </Heading>
          <List>
            <ListItem>
              <Code textColor="secondary" {...listItemProps}>adb devices</Code>
            </ListItem>  
            <ListItem>
                <Code textColor="secondary"  {...listItemProps}>adb pull /sdcard/Android/data/btsnoop_hci.log
                </Code>        
            </ListItem>
          </List>
        </Slide>
        <Slide {...bgSlideProps} >
          <Heading { ...headerProps }>
            Let's learn how to load and read logs
          </Heading>
        </Slide>
        <Slide {...bgSlideProps} >
          <Heading { ...headerProps }>
            Workshop part 2 - Instructions
          </Heading>
          <List>
            <ListItem {...listItemProps}>Clone the repo: <span>http://github.com/vnovick/repolink</span></ListItem>
            <ListItem {...listItemProps }>Find out device name with NRF Connect app</ListItem>
            <ListItem {...listItemProps }>Load logs in Wireshark</ListItem>
            <ListItem {...listItemProps }>Get led bulb Service and Characteristic that allows to write</ListItem>
            <ListItem {...listItemProps }>Bonus: Compare log entries and understand how light value should look like</ListItem>
            <ListItem {...listItemProps }>Submit your results:</ListItem>
          </List>
          <Image src={images.qrForm} width="20%"/>
        </Slide>
        <Slide {...bgSlideProps} >
          <Heading { ...headerProps }>
            What we will be building
          </Heading>
        </Slide>
        <Slide {...bgSlideProps} >
          <Heading { ...headerProps }>
            Workshop part 3 - Instructions
          </Heading>
          <List ordered type="1">
            <ListItem {...listItemProps} textColor="secondary" lineHeight={2}>
              Clone: <span style={{color: colors.lightBlue}} href="http://github.com/vnovick/repourl">http://github.com/vnovick/repourl</span>
            </ListItem>
            <ListItem style={{fontSize: 30, margin: 16}} textColor="secondary" lineHeight={2}>Search for bridges</ListItem>
            <ListItem style={{fontSize: 30, margin: 16}} textColor="secondary" lineHeight={2}>Connect bridge</ListItem>
            <ListItem style={{fontSize: 30, margin: 16}} textColor="secondary" lineHeight={2}>Authenticate and get your user</ListItem>
            <ListItem style={{fontSize: 30, margin: 16}} textColor="secondary" lineHeight={2}>Turn on lightbulb and change it's brightness</ListItem>
            <ListItem style={{fontSize: 30, margin: 16}} textColor="secondary" lineHeight={2}><span style={{color: colors.emphasize }}>Bonus: </span>change lightbulb colors</ListItem>
          </List>
        </Slide>
        <Slide {...bgSlideProps} >
          <Heading { ...headerProps }>
            Thank you! 
          </Heading>
          <Heading { ...headerProps }>
            Contact me if you are interested in a workshop or consulting
          </Heading>
          <Text textColor="quartenary">
            vnovick.com
          </Text>
        </Slide>
      </Deck>
    );
  }
}
