'use client';
import { Header } from "@/components/header/Header";
import { Footer } from "@/components/footer/Footer";
import { ConnectButton, MediaRenderer, darkTheme } from "thirdweb/react";
import { client } from "../client";
import { createWallet } from "thirdweb/wallets";

const ConnectButtonPage: React.FC = () => {
    import { createThirdwebClient } from "thirdweb";
    import { ConnectButton } from "thirdweb/react";
    import { darkTheme } from "thirdweb/react";
    import {
      inAppWallet,
      createWallet,
    } from "thirdweb/wallets";
    import { ethereum } from "thirdweb/chains";
    
    const client = createThirdwebClient({
      clientId: "....",
    });
    
    const wallets = [
      inAppWallet({
        auth: {
          options: [
            "google",
            "discord",
            "email",
            "x",
            "passkey",
            "phone",
            "facebook",
            "apple",
          ],
        },
      }),
      createWallet("io.metamask"),
      createWallet("com.coinbase.wallet"),
      createWallet("me.rainbow"),
      createWallet("io.rabby"),
      createWallet("io.zerion.wallet"),
    ];
    
    function Example() {
      return (
        <ConnectButton
          client={client}
          wallets={wallets}
          theme={darkTheme({
            colors: {
              modalBg: "#9f5909",
              borderColor: "#dfcd01",
              accentText: "#e6f236",
              primaryText: "#000000",
              secondaryText: "#ecf005",
              primaryButtonBg: "#9f590b",
              secondaryButtonHoverBg: "#15f505",
            },
          })}
          connectButton={{ label: "Log in" }}
          connectModal={{
            size: "compact",
            title: "Log In",
            titleIcon:
              "https://ipfs.io/ipfs/QmZPxvefX56wCCEBrLE12UC7johoj4PhZPCG6gdzo3whiE?filename=bw%20logo.png",
            termsOfServiceUrl:
              "https://ipfs.io/ipfs/Qmah6dCA4RCg29ZMUQf2MqCtc7f7hnwitqseLUmju99xgQ?filename=TOS.pdf",
            privacyPolicyUrl:
              "https://ipfs.io/ipfs/QmP6y8HJsozmXmwkDqAKVyGWvPjb3y7Mb9YPRUM45h3mvX?filename=Privacy%20Policy.pdf",
          }}
          accountAbstraction={{
            chain: , // replace with the chain you want
            sponsorGas: true,
          }}
        />
      );
    }
    
export default ConnectButtonPage;