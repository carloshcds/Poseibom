import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const PixTilpiaCongelada = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.pixtilpiacongelada}>
      <View style={[styles.barrainferior, styles.barrainferiorLayout]}>
        <View style={[styles.barrainferiorChild, styles.barrainferiorLayout]} />
        <Text style={styles.total}>Total:</Text>
        <Text style={styles.r2499}>R$ 24,99</Text>
      </View>
      <Pressable
        style={styles.botoavanar}
        onPress={() => navigation.navigate("QrCodeTilpiaCongelada")}
      >
        <View style={[styles.botoavanarChild, styles.botoavanarLayout]} />
        <View style={[styles.botoavanarItem, styles.botoavanarLayout]} />
        <Text style={styles.avanar}>AVANÇAR</Text>
      </Pressable>
      <View style={[styles.pix, styles.pixPosition]}>
        <Image
          style={[styles.pixChild, styles.childLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-5.png")}
        />
        <Text style={[styles.pix1, styles.pix1Typo]}>Pix</Text>
        <Image
          style={[styles.image9Icon, styles.pixPosition]}
          contentFit="cover"
          source={require("../assets/image-9.png")}
        />
        <Image
          style={styles.pixItem}
          contentFit="cover"
          source={require("../assets/ellipse-7.png")}
        />
      </View>
      <Pressable
        style={styles.catocrdito}
        onPress={() => navigation.navigate("CartoTilpiaCongelada")}
      >
        <Image
          style={[styles.catocrditoChild, styles.childLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-5.png")}
        />
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
        <Text style={[styles.cartoDeCrdito, styles.pix1Typo]}>
          Cartão de crédito local com parcelamento
        </Text>
      </Pressable>
      <Text style={[styles.metdoDePagamento, styles.produtoTypo]}>
        Metódo de Pagamento
      </Text>
      <View style={[styles.especificaes, styles.especificaesLayout]}>
        <View style={[styles.especificaesChild, styles.especificaesLayout]} />
        <Text style={[styles.filDeTilpia, styles.filDeTilpiaTypo]}>
          Filé de Tilápia Congel...
        </Text>
        <Text style={[styles.x1, styles.x1Typo]}>x 1</Text>
        <Text style={[styles.r24991, styles.x1Typo]}>R$ 24,99</Text>
        <Image
          style={styles.image6Icon}
          contentFit="cover"
          source={require("../assets/image-6.png")}
        />
      </View>
      <Text style={[styles.produto, styles.produtoTypo]}>Produto</Text>
      <Pressable
        style={styles.botovoltar}
        onPress={() => navigation.navigate("TelaTilpiaCongelada")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/botovoltar.png")}
        />
      </Pressable>
      <Text style={[styles.finalizarCompra, styles.filDeTilpiaTypo]}>
        Finalizar Compra
      </Text>
      <View style={[styles.barranotificaes, styles.barranotificaesLayout]}>
        <Text style={[styles.text, styles.textTypo]}>100%</Text>
        <Image
          style={[styles.vectorIcon1, styles.vectorIconPosition]}
          contentFit="cover"
          source={require("../assets/vector1.png")}
        />
        <Image
          style={[styles.vectorIcon2, styles.vectorIconPosition]}
          contentFit="cover"
          source={require("../assets/vector2.png")}
        />
        <Image
          style={[styles.chargingBatteryIcon, styles.barranotificaesLayout]}
          contentFit="cover"
          source={require("../assets/charging-battery.png")}
        />
        <Text style={[styles.text1, styles.textTypo]}>17:00</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  barrainferiorLayout: {
    height: 126,
    width: 360,
    left: 0,
    position: "absolute",
  },
  botoavanarLayout: {
    borderRadius: Border.br_5xs,
    position: "absolute",
  },
  pixPosition: {
    height: 21,
    left: 28,
    position: "absolute",
  },
  childLayout: {
    height: 17,
    width: 17,
    left: 0,
    position: "absolute",
  },
  pix1Typo: {
    fontFamily: FontFamily.redHatDisplaySemibold,
    fontWeight: "600",
    letterSpacing: -1,
    fontSize: FontSize.size_mini,
    left: 55,
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  produtoTypo: {
    letterSpacing: -1.8,
    fontSize: FontSize.size_7xl,
  },
  especificaesLayout: {
    height: 109,
    width: 327,
    position: "absolute",
  },
  filDeTilpiaTypo: {
    fontFamily: FontFamily.redHatDisplayRegular,
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  x1Typo: {
    top: 54,
    fontFamily: FontFamily.redHatDisplayRegular,
    letterSpacing: -1.5,
    fontSize: FontSize.size_3xl,
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  barranotificaesLayout: {
    height: 19,
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.gravityRegular,
    letterSpacing: -0.8,
    fontSize: FontSize.size_2xs,
    top: 6,
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  vectorIconPosition: {
    bottom: "10.53%",
    top: "10.53%",
    height: "78.95%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  barrainferiorChild: {
    shadowColor: "rgba(101, 101, 101, 0.67)",
    shadowOffset: {
      width: 0,
      height: -5,
    },
    shadowRadius: 12,
    elevation: 12,
    shadowOpacity: 1,
    top: 0,
    backgroundColor: Color.white,
    height: 126,
    width: 360,
  },
  total: {
    left: 15,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.redHatDisplayExtrabold,
    fontWeight: "800",
    letterSpacing: -1.6,
    fontSize: FontSize.size_4xl,
    top: 16,
    position: "absolute",
  },
  r2499: {
    left: 258,
    textAlign: "right",
    color: Color.black,
    top: 16,
    fontFamily: FontFamily.redHatDisplayExtrabold,
    fontWeight: "800",
    letterSpacing: -1.6,
    fontSize: FontSize.size_4xl,
    position: "absolute",
  },
  barrainferior: {
    top: 674,
  },
  botoavanarChild: {
    top: 22,
    left: 35,
    backgroundColor: Color.lightskyblue_200,
    width: 248,
    height: 29,
  },
  botoavanarItem: {
    backgroundColor: Color.cornflowerblue_200,
    height: 47,
    width: 318,
    top: 0,
    left: 0,
  },
  avanar: {
    top: 9,
    left: 108,
    color: Color.white,
    textAlign: "center",
    fontFamily: FontFamily.redHatDisplayExtrabold,
    fontWeight: "800",
    letterSpacing: -1.6,
    fontSize: FontSize.size_4xl,
    position: "absolute",
  },
  botoavanar: {
    top: 732,
    left: 21,
    height: 51,
    width: 318,
    position: "absolute",
  },
  pixChild: {
    top: 2,
  },
  pix1: {
    top: 1,
  },
  image9Icon: {
    width: 21,
    top: 0,
  },
  pixItem: {
    top: 4,
    left: 2,
    width: 13,
    height: 13,
    position: "absolute",
  },
  pix: {
    top: 397,
    width: 74,
  },
  catocrditoChild: {
    top: 1,
  },
  vectorIcon: {
    height: "80%",
    width: "7.11%",
    top: "10%",
    right: "83.56%",
    bottom: "10%",
    left: "9.33%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  cartoDeCrdito: {
    top: 0,
  },
  catocrdito: {
    top: 364,
    width: 300,
    height: 20,
    left: 28,
    position: "absolute",
  },
  metdoDePagamento: {
    top: 314,
    left: 25,
    fontSize: FontSize.size_7xl,
    fontFamily: FontFamily.redHatDisplaySemibold,
    fontWeight: "600",
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  especificaesChild: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.whitesmoke,
    top: 0,
    left: 0,
  },
  filDeTilpia: {
    top: 25,
    letterSpacing: -1.5,
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.redHatDisplayRegular,
    left: 16,
  },
  x1: {
    left: 18,
  },
  r24991: {
    left: 80,
  },
  image6Icon: {
    top: 11,
    left: 214,
    borderRadius: Border.br_mid,
    width: 95,
    height: 86,
    position: "absolute",
  },
  especificaes: {
    top: 187,
    left: 16,
  },
  produto: {
    top: 145,
    left: 25,
    fontSize: FontSize.size_7xl,
    fontFamily: FontFamily.redHatDisplaySemibold,
    fontWeight: "600",
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  botovoltar: {
    top: 68,
    width: 43,
    height: 43,
    left: 16,
    position: "absolute",
  },
  finalizarCompra: {
    top: 72,
    left: 102,
    letterSpacing: -1.8,
    fontSize: FontSize.size_7xl,
  },
  text: {
    left: 301,
  },
  vectorIcon1: {
    width: "5.23%",
    right: "20.35%",
    left: "74.42%",
  },
  vectorIcon2: {
    width: "4.36%",
    right: "14.24%",
    left: "81.4%",
  },
  chargingBatteryIcon: {
    left: 325,
    width: 19,
    top: 0,
  },
  text1: {
    left: 0,
  },
  barranotificaes: {
    top: 7,
    left: 11,
    width: 344,
  },
  pixtilpiacongelada: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default PixTilpiaCongelada;
