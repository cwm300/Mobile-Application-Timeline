import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import config from "../../config";

class Post extends Component {
  constructor() {
    super();

    this.state = {
      liked: false,
    };

    this.state = {
      screenWidth: Dimensions.get("window").width,
    };
  }

  Component;
  likeToggled() {
    this.setState({
      liked: !this.state.liked,
    });
  }

  render() {
    const vidHeight = Math.floor(this.state.screenWidth * 0.57);
    const videoSrc =
      "C:/Windows/System32/SaloonApp/src/assets/images/sb_video.png";
    const heartIconColor = this.state.liked
      ? config.styleConstants.saloonPrimary
      : "rgb(255,255,255)";

    return (
      <View style={{ flex: 1, width: 100 + "%", height: 100 + "%" }}>
        <View style={styles.saloonVid}>
          <Image
            style={{
              width: this.state.screenWidth,
              height: vidHeight,
            }}
            source={require(videoSrc)}
          />
        </View>

        <View style={styles.deadSpace1}></View>

        <View style={styles.titleBar}>
          <View style={{ flexDirection: "column", width: 10 + "%" }}>
            <Image
              style={styles.saloonPic}
              source={require("C:/Windows/System32/SaloonApp/src/assets/images/sb_cover.png")}
            />
          </View>

          <View
            style={{ flexDirection: "column", width: 70 + "%", paddingLeft: 4 }}
          >
            <Text style={{ fontSize: 17, fontWeight: "bold", color: "white" }}>
              Spring Break
            </Text>
            <Text style={{ fontSize: 11, color: "grey", paddingTop: 1.5 }}>
              updated 2 min ago
            </Text>
          </View>

          <View
            style={{
              flexDirection: "column",
              width: 10 + "%",
              alignItems: "center",
              paddingTop: 2.75,
            }}
          >
            <Image
              style={[
                styles.icon,
                { height: 25, width: 25, tintColor: "white" },
              ]}
              source={config.images.talkIcon}
            />

            <Text style={{ fontSize: 12, color: "grey", paddingTop: 1.25 }}>
              127
            </Text>
          </View>

          <View
            style={{
              flexDirection: "column",
              width: 10 + "%",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => {
                this.likeToggled();
              }}
            >
              <Image
                style={[
                  styles.icon,
                  { height: 28, width: 28, tintColor: heartIconColor },
                ]}
                source={config.images.heartIcon}
              />
            </TouchableOpacity>

            <Text style={{ fontSize: 12, color: "grey" }}>1.3k</Text>
          </View>
        </View>

        <View style={styles.desBar}>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontSize: 13, fontWeight: "bold", color: "white" }}>
              Tony Runion
            </Text>
            <Text style={{ fontSize: 13, color: "white" }}> and </Text>
            <Text style={{ fontSize: 13, fontWeight: "bold", color: "white" }}>
              4 others
            </Text>
          </View>

          <View style={styles.deadSpace1}></View>

          <View>
            <Text style={{ fontSize: 13, color: "white" }}>
              5 friends. 3 states. 1 van.
            </Text>
          </View>
        </View>

        <View style={styles.deadSpace2}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  titleBar: {
    width: 100 + "%",
    height: config.styleConstants.rowHeight,
    backgroundColor: config.styleConstants.saloonBlack,
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 4,
    alignItems: "center",
  },

  desBar: {
    width: 100 + "%",
    height: 55,
    backgroundColor: config.styleConstants.saloonBlack,
    flexDirection: "column",
    paddingHorizontal: 10,
    paddingVertical: 6,
    alignItems: "flex-start",
  },

  saloonVid: {},

  saloonPic: {
    width: 35,
    height: 35,
    borderRadius: 20,
  },

  deadSpace1: {
    width: 100 + "%",
    height: 8,
    backgroundColor: config.styleConstants.saloonBlack,
  },

  deadSpace2: {
    width: 100 + "%",
    height: 30,
    backgroundColor: config.styleConstants.saloonBlack,
  },
});

export default Post;
