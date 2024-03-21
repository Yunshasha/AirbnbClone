import React from "react";
import {
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  TouchableOpacity,
  Text,
} from "react-native";
import {
  Ionicons,
  MaterialIcons,
  AntDesign,
  FontAwesome5,
  Feather,
} from "@expo/vector-icons";

const userFuncs = ({ modalVisible, setModalVisible }: any) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <View style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
        <View style={styles.modalView}>
          <View style={styles.funcRow}>
            <View>
              <TouchableOpacity style={styles.funcBlock}>
                <Ionicons name="notifications-outline" size={26} color="#fff" />
                <Text style={styles.funcText}>Notifications</Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity style={styles.funcBlock}>
                <MaterialIcons name="cabin" size={26} color="#fff" />
                <Text style={styles.funcText}>List a Space</Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity style={styles.funcBlock}>
                <AntDesign name="adduser" size={26} color="#fff" />
                <Text style={styles.funcText}>Add Account</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.funcRow}>
            <View>
              <TouchableOpacity style={styles.funcBlock}>
                <FontAwesome5 name="user-friends" size={26} color="#fff" />
                <Text style={styles.funcText}>Add Friends</Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity style={styles.funcBlock}>
                <MaterialIcons name="payment" size={26} color="#fff" />

                <Text style={styles.funcText}>Payments</Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity style={styles.funcBlock}>
                <Ionicons name="settings-outline" size={26} color="#fff" />
                <Text style={styles.funcText}>Settings</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.funcRow}>
            <View>
              <TouchableOpacity style={styles.funcBlock}>
                <MaterialIcons name="card-giftcard" size={26} color="#fff" />
                <Text style={styles.funcText}>Coupons & Gift</Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity style={styles.funcBlock}>
                <Ionicons name="help-circle-outline" size={26} color="#fff" />
                <Text style={styles.funcText}>Notifications</Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity style={styles.funcBlock}>
                <Ionicons name="paper-plane-outline" size={26} color="#fff" />
                <Text style={styles.funcText}>Give Feedback</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
        <View style={styles.overlay} />
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalView: {
    height: 280,
    marginHorizontal: 20,
    backgroundColor: "rgba(0,0,0,0.7)",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  funcRow: {
    flex: 1,
    flexDirection: "row",
    gap: 8,
  },
  funcBlock: {
    width: 100,
    alignItems: "center",
    gap: 8,
  },
  funcText: {
    color: "#fff",
    fontSize: 12,
    fontFamily: "mon-sb",
  },

  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
});
export default userFuncs;
