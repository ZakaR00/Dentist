import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import {} from "react-native-paper";

function TeethShapeScreen({ route }) {

  const { item } = route.params;
  console.log(item);
  return (
    <>
      <View style={styles.container}>
        <Image
          style={{
            width: `80%`,
            height: 440,
          }}
          source={{ uri: "https://s3-alpha-sig.figma.com/img/c644/14f1/bad8526e41917bc40a16f46abe44d6f1?Expires=1639958400&Signature=UUmhx0SCeTK1q3zbQgVSBl7qyUu1o5iCnDsKAQ0y36kCSCCtaWMomE8VqcKORp3oDCBPY2-CCGkfLz4ByqTsaolkxQ9XLC4tItEXiwf67od0AfVhON4eEN8dXVdfFgDILmlu5fAaTdiBT~RMOofbJY7hSFOPGaLB3gOKxZElCoYz~Lo8cetPUL0zXfgfcTWGX~hW5KLBHZp~KxAZWCNN3tkczQnR8cYZigwfxhmNvW4lorY9vUoSpXt~OO68fTJFNw9cX8zuk1zvC~ORUBHTNp8OeNq3QQ8MH5skLF7EGMhxiXYWNJ73RrnLGM6h4WlSWTHBsk9-pzoI9dxdqobs8w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" }}
        />
      </View>
      <View style={styles.eighteenTooth}>
        <Text style={{ fontSize: 16, color: item.dentNumber !== 18 ? `#000000` : `#FF5A5A` }}>18</Text>
      </View>
      <View style={styles.seventeenTooth}>
        <Text style={{ fontSize: 16, color: item.dentNumber !== 17 ? `#000000` : `#FF5A5A` }}>17</Text>
      </View>
      <View style={styles.sixteenTooth}>
        <Text style={{ fontSize: 16, color: item.dentNumber !== 16 ? `#000000` : `#FF5A5A` }}>16</Text>
      </View>
      <View style={styles.fivteenTooth}>
        <Text style={{ fontSize: 16, color: item.dentNumber !== 15 ? `#000000` : `#FF5A5A` }}>15</Text>
      </View>
      <View style={styles.fourteenTooth}>
        <Text style={{ fontSize: 16, color: item.dentNumber !== 14 ? `#000000` : `#FF5A5A` }}>14</Text>
      </View>
      <View style={styles.thirteenTooth}>
        <Text style={{ fontSize: 16, color: item.dentNumber !== 13 ? `#000000` : `#FF5A5A` }}>13</Text>
      </View>
      <View style={styles.twelveTooth}>
        <Text style={{ fontSize: 16, color: item.dentNumber !== 12 ? `#000000` : `#FF5A5A` }}>12</Text>
      </View>
      <View style={styles.elevenTooth}>
        <Text style={{ fontSize: 15.5, color: item.dentNumber !== 11 ? `#000000` : `#FF5A5A` }}>11</Text>
      </View>
      <View style={styles.twentyOneTooth}>
        <Text style={{ fontSize: 15.5, color: item.dentNumber !== 21 ? `#000000` : `#FF5A5A` }}>21</Text>
      </View>
      <View style={styles.twentyTwoTooth}>
        <Text style={{ fontSize: 15.5, color: item.dentNumber !== 22 ? `#000000` : `#FF5A5A` }}>22</Text>
      </View>
      <View style={styles.twentyThreeTooth}>
        <Text style={{ fontSize: 15.5, color: item.dentNumber !== 23 ? `#000000` : `#FF5A5A` }}>23</Text>
      </View>
      <View style={styles.twentyFourTooth}>
        <Text style={{ fontSize: 15.5 , color: item.dentNumber !== 24 ? `#000000` : `#FF5A5A` }}>24</Text>
      </View>
      <View style={styles.twentyFiveTooth}>
        <Text style={{ fontSize: 15.5, color: item.dentNumber !== 25 ? `#000000` : `#FF5A5A`}}>25</Text>
      </View>
      <View style={styles.twentySixTooth}>
        <Text style={{ fontSize: 15.5, color: item.dentNumber !== 26 ? `#000000` : `#FF5A5A` }}>26</Text>
      </View>
      <View style={styles.twentySevenTooth}>
        <Text style={{ fontSize: 15.5, color: item.dentNumber !== 27 ? `#000000` : `#FF5A5A` }}>27</Text>
      </View>
      <View style={styles.twentyEightTooth}>
        <Text style={{ fontSize: 15.5, color: item.dentNumber !== 28 ? `#000000` : `#FF5A5A` }}>28</Text>
      </View>
      <View style={styles.fortyEightTooth}>
        <Text style={{ fontSize: 15.5, color: item.dentNumber !== 48 ? `#000000` : `#FF5A5A` }}>48</Text>
      </View>
      <View style={styles.fortySevenTooth}>
        <Text style={{ fontSize: 15.5, color: item.dentNumber !== 47 ? `#000000` : `#FF5A5A` }}>47</Text>
      </View>
      <View style={styles.fortySixTooth}>
        <Text style={{ fontSize: 15.5, color: item.dentNumber !== 46 ? `#000000` : `#FF5A5A` }}>46</Text>
      </View>
      <View style={styles.fortyFiveTooth}>
        <Text style={{ fontSize: 15.5, color: item.dentNumber !== 45 ? `#000000` : `#FF5A5A` }}>45</Text>
      </View>
      <View style={styles.fortyFourTooth}>
        <Text style={{ fontSize: 15.5,  color: item.dentNumber !== 44 ? `#000000` : `#FF5A5A`}}>44</Text>
      </View>
      <View style={styles.fortyThreeTooth}>
        <Text style={{ fontSize: 15.5, color: item.dentNumber !== 43 ? `#000000` : `#FF5A5A` }}>43</Text>
      </View>
      <View style={styles.fortyTwoTooth}>
        <Text style={{ fontSize: 15.5, color: item.dentNumber !== 42 ? `#000000` : `#FF5A5A` }}>42</Text>
      </View>
      <View style={styles.fortyOneTooth}>
        <Text style={{ fontSize: 15.5, color: item.dentNumber !== 41 ? `#000000` : `#FF5A5A` }}>41</Text>
      </View>
      <View style={styles.thirtyOneTooth}>
        <Text style={{ fontSize: 15.5, color: item.dentNumber !== 31 ? `#000000` : `#FF5A5A` }}>31</Text>
      </View>
      <View style={styles.thirtyTwoTooth}>
        <Text style={{ fontSize: 15.5,  color: item.dentNumber !== 32 ? `#000000` : `#FF5A5A`}}>32</Text>
      </View>
      <View style={styles.thirtyThreeTooth}>
        <Text style={{ fontSize: 15.5, color: item.dentNumber !== 33 ? `#000000` : `#FF5A5A` }}>33</Text>
      </View>
      <View style={styles.thirtyFourTooth}>
        <Text style={{ fontSize: 15.5, color: item.dentNumber !== 34 ? `#000000` : `#FF5A5A` }}>34</Text>
      </View>
      <View style={styles.thirtyFiveTooth}>
        <Text style={{ fontSize: 15.5, color: item.dentNumber !== 35 ? `#000000` : `#FF5A5A` }}>35</Text>
      </View>
      <View style={styles.thirtySixTooth}>
        <Text style={{ fontSize: 15.5, color: item.dentNumber !== 36 ? `#000000` : `#FF5A5A` }}>36</Text>
      </View>
      <View style={styles.thirtySevenTooth}>
        <Text style={{ fontSize: 15.5, color: item.dentNumber !== 37 ? `#000000` : `#FF5A5A` }}>37</Text>
      </View>
      <View style={styles.thirtyEightTooth}>
        <Text style={{ fontSize: 15.5, color: item.dentNumber !== 38 ? `#000000` : `#FF5A5A` }}>38</Text>
      </View>
    </>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: `center`,
    justifyContent: `center`,
    backgroundColor: `#fff`,
  },
  eighteenTooth: {
    position: "absolute",
    width: 22,
    height: 21,
    left: 13,
    top: 340,
  },
  seventeenTooth: {
    position: "absolute",
    width: 20,
    height: 21,
    left: 18,
    top: 300,
  },
  sixteenTooth: {
    position: "absolute",
    width: 22,
    height: 21,
    left: 27,
    top: 260,
  },
  fivteenTooth: {
    position: "absolute",
    width: 22,
    height: 21,
    left: 40,
    top: 225,
  },
  fourteenTooth: {
    position: "absolute",
    width: 22,
    height: 21,
    left: 57,
    top: 198,
  },
  thirteenTooth: {
    position: "absolute",
    width: 22,
    height: 21,
    left: 80,
    top: 166,
  },
  twelveTooth: {
    position: "absolute",
    width: 21,
    height: 21,
    left: 114,
    top: 148,
  },
  elevenTooth: {
    position: "absolute",
    width: 19,
    height: 21,
    left: 154,
    top: 136,
  },
  twentyOneTooth: {
    position: "absolute",
    width: 21,
    height: 21,
    left: 194,
    top: 132,
  },
  twentyTwoTooth: {
    position: "absolute",
    width: 23,
    height: 21,
    left: 234,
    top: 139,
  },
  twentyThreeTooth: {
    position: "absolute",
    width: 24,
    height: 21,
    left: 272,
    top: 157,
  },
  twentyFourTooth: {
    position: "absolute",
    width: 24,
    height: 21,
    left: 297,
    top: 190,
  },
  twentyFiveTooth: {
    position: "absolute",
    width: 24,
    height: 21,
    left: 317,
    top: 220,
  },
  twentySixTooth: {
    position: "absolute",
    width: 24,
    height: 21,
    left: 330,
    top: 260,
  },
  twentySevenTooth: {
    position: "absolute",
    width: 24,
    height: 21,
    left: 340,
    top: 300,
  },
  twentyEightTooth: {
    position: "absolute",
    width: 24,
    height: 21,
    left: 350,
    top: 340,
  },
  fortyEightTooth: {
    position: "absolute",
    width: 25,
    height: 21,
    left: 13,
    top: 410,
  },
  fortySevenTooth: {
    position: "absolute",
    width: 25,
    height: 21,
    left: 21,
    top: 450,
  },
  fortySixTooth: {
    position: "absolute",
    width: 25,
    height: 21,
    left: 38,
    top: 490,
  },
  fortyFiveTooth: {
    position: "absolute",
    width: 25,
    height: 21,
    left: 56,
    top: 530,
  },
  fortyFourTooth: {
    position: "absolute",
    width: 25,
    height: 21,
    left: 75,
    top: 560,
  },
  fortyThreeTooth: {
    position: "absolute",
    width: 25,
    height: 21,
    left: 110,
    top: 584,
  },
  fortyTwoTooth: {
    position: "absolute",
    width: 24,
    height: 21,
    left: 140,
    top: 598,
  },
  fortyOneTooth: {
    position: "absolute",
    width: 24,
    height: 21,
    left: 170,
    top: 602,
  },
  thirtyOneTooth: {
    position: "absolute",
    width: 24,
    height: 21,
    left: 200,
    top: 601,
  },
  thirtyTwoTooth: {
    position: "absolute",
    width: 24,
    height: 21,
    left: 230,
    top: 599,
  },
  thirtyThreeTooth: {
    position: "absolute",
    width: 24,
    height: 21,
    left: 262,
    top: 589,
  },
  thirtyFourTooth: {
    position: "absolute",
    width: 24,
    height: 21,
    left: 288,
    top: 564,
  },
  thirtyFiveTooth: {
    position: "absolute",
    width: 24,
    height: 21,
    left: 304,
    top: 529,
  },
  thirtySixTooth: {
    position: "absolute",
    width: 24,
    height: 21,
    left: 330,
    top: 490,
  },
  thirtySevenTooth: {
    position: "absolute",
    width: 24,
    height: 21,
    left: 340,
    top: 440,
  },
  thirtyEightTooth: {
    position: "absolute",
    width: 24,
    height: 21,
    left: 350,
    top: 400,
  },
});


export default TeethShapeScreen;
