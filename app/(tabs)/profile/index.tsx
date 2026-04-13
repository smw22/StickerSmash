import { employees } from "@/data/employees";
import { Link } from "expo-router";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Our Team</Text>
      <Text style={styles.text}>Meet the people behind Stickermash</Text>
      <FlatList
        data={employees}
        contentContainerStyle={styles.listContainer}
        renderItem={({ item }) => (
          <Link href={`/profile/${item.id}`} asChild>
            <Pressable>
              <View style={styles.employeeCard}>
                <Text style={styles.employeeName}>{item.name}</Text>
                <Text style={styles.employeeRole}>{item.role}</Text>
                <Text style={styles.employeeDepartment}>{item.department}</Text>
              </View>
            </Pressable>
          </Link>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#25292e",
  },
  text: {
    color: "#fff",
    marginBottom: 10,
  },
  titleText: {
    fontSize: 40,
    color: "#fff",
    marginBottom: 5,
  },
  listContainer: {
    paddingVertical: 10,
    gap: 12,
  },
  employeeCard: {
    backgroundColor: "#292f43",
    padding: 15,
    borderRadius: 8,
  },
  employeeName: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "600",
    marginBottom: 4,
  },
  employeeRole: {
    fontSize: 16,
    color: "#ffd33d",
    fontWeight: "600",
    marginBottom: 4,
  },
  employeeDepartment: {
    fontSize: 14,
    color: "#999",
  },
});
