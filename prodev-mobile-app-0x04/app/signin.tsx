import { Text, TextInput, View, TouchableOpacity, Image } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { HEROLOGOGREEN } from "@/constants";
import { styles } from "@/styles/_join"; // IMPORTANT — use YOUR join styles

export default function signIn() {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>

                {/* TOP BAR */}
                <View style={styles.iconsection}>
                    <Ionicons name="arrow-back" size={25} />
                    <Image source={HEROLOGOGREEN} />
                </View>

                {/* TITLE */}
                <View style={styles.titleTextGroup}>
                    <Text style={styles.titleText}>Sign in to your</Text>
                    <Text style={styles.titleText}>Account</Text>
                    <Text style={styles.subText}>
                        Enter your email and password to sign in.
                    </Text>
                </View>

                {/* FORM */}
                <View style={styles.formGroup}>
                    {/* EMAIL */}
                    <View>
                        <Text style={styles.formLabel}>Email</Text>
                        <TextInput
                            keyboardType="email-address"
                            style={styles.formControl}
                        />
                    </View>

                    {/* PASSWORD */}
                    <View>
                        <Text style={styles.formLabel}>Password</Text>
                        <View style={styles.formPasswordControl}>
                            <TextInput
                                style={styles.passwordControl}
                                secureTextEntry
                            />
                            <FontAwesome
                                name="eye-slash"
                                size={24}
                                color="#7E7B7B"
                            />
                        </View>
                    </View>

                    <Text style={styles.forgotPasswordText}>
                        Forgot password?
                    </Text>
                </View>

                {/* PRIMARY CTA */}
                <TouchableOpacity style={styles.primaryButton}>
                    <Text style={styles.buttonText}>Sign in</Text>
                </TouchableOpacity>

                {/* DIVIDER */}
                <View style={styles.dividerGroup}>
                    <View style={styles.divider}></View>
                    <Text style={styles.dividerText}>OR</Text>
                    <View style={styles.divider}></View>
                </View>

                {/* SOCIAL */}
                <View style={styles.secondaryButtonGroup}>
                    <TouchableOpacity style={styles.secondaryButton}>
                        <Image source={require("@/assets/images/google.png")} />
                        <Text style={styles.secondaryButtonText}>
                            Continue with Google
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.secondaryButton}>
                        <Image source={require("@/assets/images/facebook.png")} />
                        <Text style={styles.secondaryButtonText}>
                            Continue with Facebook
                        </Text>
                    </TouchableOpacity>
                </View>

                {/* FOOTER */}
                <View style={styles.signupgroup}>
                    <Text style={styles.signupTitleText}>
                        Don&apos;t have an account?
                    </Text>
                    <Text style={styles.signupSubTitleText}> Join now</Text>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}
