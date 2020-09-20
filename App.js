import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";

import Constants from "expo-constants";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const POLO_BLUE_COLOR = "rgb(51,60,87)";
const FOLLOW_COLOR = "rgb(71,113,246)";
const SEND_MESSAGE_COLOR = "rgb(120,213,250)";

export default function App() {
  const imgData = [
    { id: 1, imgSource: require("./assets/1.jpg") },
    { id: 2, imgSource: require("./assets/2.jpg") },
    { id: 3, imgSource: require("./assets/3.jpg") },
    { id: 4, imgSource: require("./assets/4.jpg") },
    { id: 5, imgSource: require("./assets/5.jpg") },
    { id: 6, imgSource: require("./assets/6.jpg") },
  ];

  const centerImgData = Math.floor(imgData.length / 2);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="md-arrow-round-back" size={27} color="#6b77a1" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Entypo name="grid" size={27} color="#6b77a1" />
        </TouchableOpacity>
      </View>

      <View style={styles.avatarWrapper}>
        <Image
          source={require("./assets/avatar.jpg")}
          style={styles.avatar}
          resizeMode="cover"
        />
        <View style={styles.nameArea}>
          <Text
            style={{ fontSize: 27, fontWeight: "bold", color: POLO_BLUE_COLOR }}
          >
            Floyd Hayes
          </Text>
          <Text style={styles.grayLetter}>Photographer</Text>
          <View style={styles.btnWrapper}>
            <TouchableOpacity
              style={[styles.btnFollow, styles.shadowStyle]}
              onPress={() => {
                alert("Followed");
              }}
            >
              <Text style={{ color: "white", fontSize: 16 }}>Follow</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.btnSend, styles.shadowStyle]}
              onPress={() => {
                alert("Message sended");
              }}
            >
              <Ionicons name="md-send" size={20} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.countArea}>
        <View style={styles.count}>
          <Text style={styles.number}>210</Text>
          <Text style={styles.grayLetter}>Photos</Text>
        </View>
        <View style={styles.count}>
          <Text style={styles.number}>15k</Text>
          <Text style={styles.grayLetter}>Followers</Text>
        </View>
        <View style={styles.count}>
          <Text style={styles.number}>605</Text>
          <Text style={styles.grayLetter}>Following</Text>
        </View>
      </View>

      <View style={styles.imageArea}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <View style={styles.listImage}>
            {imgData.slice(0, centerImgData).map((item) => {
              return (
                <TouchableOpacity key={item.id}>
                  <Image source={item.imgSource} style={styles.image} />
                </TouchableOpacity>
              );
            })}
          </View>

          <View style={styles.listImage}>
            {imgData.slice(centerImgData).map((item) => {
              return (
                <TouchableOpacity key={item.id}>
                  <Image source={item.imgSource} style={styles.image} />
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>
      </View>

      <View style={styles.navBarWrapper}>
        <View style={styles.navBar}>
          <TouchableOpacity>
            <Feather name="search" size={27} color="#6b77a1" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Feather name="plus-circle" size={27} color="#6b77a1" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Feather name="user" size={27} color="#6b77a1" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 23,
    marginTop: 35,
    flex: 1, // 0.05 0.15 0.18 0.65 0.07
  },

  header: {
    flexDirection: "row",
    flex: 0.05,
    justifyContent: "space-between",
  },

  grayLetter: {
    fontSize: 15,
    color: "#989db8",
  },

  avatarWrapper: {
    flex: 0.15,
    flexDirection: "row",
    alignItems: "flex-end",
  },

  avatar: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },

  nameArea: {
    marginLeft: 35,
  },

  btnWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 165,
    height: 30,
    marginTop: 15,
  },

  btnFollow: {
    backgroundColor: FOLLOW_COLOR,
    borderRadius: 30,
    paddingVertical: 2,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
  },

  shadowStyle: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  btnSend: {
    backgroundColor: SEND_MESSAGE_COLOR,
    borderRadius: 30,
    width: 60,
    alignItems: "center",
    justifyContent: "center",
  },

  countArea: {
    flex: 0.18,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },

  count: {
    alignItems: "center",
  },

  number: {
    fontSize: 25,
    fontWeight: "bold",
    color: POLO_BLUE_COLOR,
  },

  imageArea: {
    flex: 0.65,
  },

  scrollView: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  image: {
    width: null,
    height: 150,
    borderRadius: 15,
    marginBottom: 15,
  },

  navBarWrapper: {
    flex: 0.07,
    alignItems: "center",
    justifyContent: "center",
  },

  listImage: {
    flex: 0.4775,
  },

  navBar: {
    width: 250,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
