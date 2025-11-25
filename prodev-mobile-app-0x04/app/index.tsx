import { Text, View, Image, ImageBackground, TouchableOpacity } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { BACKGROUNDIMAGE, HEROLOGO } from "@/constants";
import { styles } from "@/styles/_mainstyle";

export default function Index() {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <ImageBackground
                    source={BACKGROUNDIMAGE}
                    style={styles.backgroundImageContainer}
                    resizeMode="cover"
                >
                    {/* Logo */}
                    <View style={styles.logoContainer}>
                        <Image source={HEROLOGO} />
                    </View>

                    {/* Title */}
                    <View style={styles.titleContainer}>
                        <Text style={styles.titleText}>Find your favorite place here</Text>
                    </View>

                    <View style={styles.titleSubTextContainer}>
                        <Text style={styles.titleSubText}>The best prices for over 2</Text>
                        <Text style={styles.titleSubText}>million properties worldwide</Text>
                    </View>

                    {/* Bottom CTA */}
                    <View style={{ marginTop: "auto", marginBottom: 50 }}>
                        <View style={styles.buttonGroup}>
                            <TouchableOpacity style={styles.buttonPrimary}>
                                <Text style={styles.buttonPrimaryText}>Join here</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.buttonSecondary}>
                                <Text style={styles.buttonSecondaryText}>Sign In</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.buttonGroupSubText}>
                            <Text style={styles.buttonSecondaryText}>Continue to home</Text>
                        </View>
                    </View>
                </ImageBackground>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}
