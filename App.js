import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";

const Header = ({ text }) => {
  return <Text>{text}</Text>;
};
const MyProfile = () => {
  return (
    <Profile
      name={"종윤"}
      uri={
        "https://image.ajunews.com/content/image/2021/07/11/20210711123807665004.jpg"
      }
      profileSize={50}
    />
  );
};
const Division = ({ text }) => {
  return <Text>{text}</Text>;
};
const FriendSection = ({ text }) => {
  return <Text>{text}</Text>;
};

const FriendList = () => {
  return (
    <View>
      <Profile
        name={"강욱1"}
        uri={
          "https://shop.peopet.co.kr/data/goods/388/2022/06/_temp_16557127733930view.jpg"
        }
        profileSize={30}
      />
      <Profile
        name={"강욱2"}
        uri={
          "https://shop.peopet.co.kr/data/goods/388/2022/06/_temp_16557127733930view.jpg"
        }
        profileSize={30}
      />
      <Profile
        name={"강욱3"}
        uri={
          "https://shop.peopet.co.kr/data/goods/388/2022/06/_temp_16557127733930view.jpg"
        }
        profileSize={30}
      />
      <Profile
        name={"강욱4"}
        uri={
          "https://shop.peopet.co.kr/data/goods/388/2022/06/_temp_16557127733930view.jpg"
        }
        profileSize={30}
      />
      <Profile
        name={"강욱5"}
        uri={
          "https://shop.peopet.co.kr/data/goods/388/2022/06/_temp_16557127733930view.jpg"
        }
        profileSize={30}
      />
      <Profile
        name={"강욱6"}
        uri={
          "https://shop.peopet.co.kr/data/goods/388/2022/06/_temp_16557127733930view.jpg"
        }
        profileSize={30}
      />
    </View>
  );
};
//==함수형컴포넌트
// const Profile = (props) => {
//   return (
//     <View style={{ flexDirection: "row" }}>
//       <Image
//         source={{
//           uri: props.uri,
//         }}
//         style={{
//           width: props.profileSize,
//           height: props.profileSize,
//         }}
//       />
//       <Text>{props.name}</Text>
//     </View>
//   );
// };

//==클래스형컴포넌트
class Profile extends React.Component {
  render() {
    return (
      <View style={{ flexDirection: "row" }}>
        <Image
          source={{
            uri: this.props.uri,
          }}
          style={{
            width: this.props.profileSize,
            height: this.props.profileSize,
          }}
        />
        <Text>{this.props.name}</Text>
      </View>
    );
  }
}

export default function App() {
  return (
    <View style={styles.container}>
      <Header text={"친구"} />
      <MyProfile />
      <Division text={"Division"} />
      <FriendSection text={"Friend Section"} />
      <FriendList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
