import React, { useRef, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  StatusBar,
  Animated,
  TouchableOpacity,
  Linking,
  Dimensions,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import { colors } from '../theme/colors';

type Props = NativeStackScreenProps<RootStackParamList, 'Details'>;

const { width } = Dimensions.get('window');

const InfoChip = ({ label, value }: { label: string; value: string }) => (
  <View style={styles.chip}>
    <Text style={styles.chipLabel}>{label}</Text>
    <Text style={styles.chipValue}>{value}</Text>
  </View>
);

const DetailsScreen: React.FC<Props> = ({ navigation, route }) => {
  const { program } = route.params;
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(40)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 450,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 450,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.background} />

      <View style={styles.navBar}>
        <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
          <Text style={styles.backArrow}>←</Text>
        </TouchableOpacity>
        <Text style={styles.navTitle} numberOfLines={1}>
          Program Details
        </Text>
        <View style={{ width: 40 }} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Animated.View
          style={[styles.content, { opacity: fadeAnim, transform: [{ translateY: slideAnim }] }]}>
          <View style={styles.heroCard}>
            <Text style={styles.heroFlag}>{program.flag}</Text>
            <Text style={styles.heroUniversity}>{program.university}</Text>
            <View style={styles.countryRow}>
              <View style={styles.countryBadge}>
                <Text style={styles.countryText}>📍 {program.country}</Text>
              </View>
            </View>
            <View style={styles.rankingBadge}>
              <Text style={styles.rankingText}>🏆 {program.ranking}</Text>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>About</Text>
            <Text style={styles.sectionText}>{program.fullDescription}</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Key Details</Text>
            <View style={styles.chipGrid}>
              <InfoChip label="💰 Tuition" value={program.tuition} />
              <InfoChip label="🗓 Intake" value={program.intakeMonths} />
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Available Programs</Text>
            <View style={styles.programsGrid}>
              {program.programs.map((prog, idx) => (
                <View key={idx} style={styles.programTag}>
                  <Text style={styles.programTagText}>{prog}</Text>
                </View>
              ))}
            </View>
          </View>

          <TouchableOpacity
            style={styles.applyBtn}
            activeOpacity={0.88}
            onPress={() => Linking.openURL(program.website)}>
            <Text style={styles.applyBtnText}>🌐  Visit University Website</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.interestedBtn} activeOpacity={0.88}>
            <Text style={styles.interestedBtnText}>⭐  Save This Program</Text>
          </TouchableOpacity>
        </Animated.View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  navBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.cardBorder,
  },
  backBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.card,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.cardBorder,
  },
  backArrow: {
    color: colors.text,
    fontSize: 20,
    fontWeight: '700',
  },
  navTitle: {
    color: colors.text,
    fontSize: 16,
    fontWeight: '700',
    flex: 1,
    textAlign: 'center',
    marginHorizontal: 8,
  },
  content: {
    paddingBottom: 40,
  },
  heroCard: {
    alignItems: 'center',
    backgroundColor: colors.card,
    marginHorizontal: 16,
    marginTop: 16,
    borderRadius: 24,
    paddingVertical: 30,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: colors.cardBorder,
  },
  heroFlag: {
    fontSize: 64,
    marginBottom: 12,
  },
  heroUniversity: {
    color: colors.text,
    fontSize: 22,
    fontWeight: '800',
    textAlign: 'center',
    marginBottom: 10,
  },
  countryRow: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  countryBadge: {
    backgroundColor: 'rgba(255,255,255,0.07)',
    paddingHorizontal: 14,
    paddingVertical: 5,
    borderRadius: 20,
  },
  countryText: {
    color: colors.textSecondary,
    fontSize: 13,
    fontWeight: '500',
  },
  rankingBadge: {
    backgroundColor: 'rgba(91, 78, 255, 0.18)',
    paddingHorizontal: 14,
    paddingVertical: 5,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(91, 78, 255, 0.35)',
  },
  rankingText: {
    color: colors.primaryLight,
    fontSize: 13,
    fontWeight: '600',
  },
  section: {
    marginHorizontal: 16,
    marginTop: 20,
  },
  sectionTitle: {
    color: colors.text,
    fontSize: 17,
    fontWeight: '700',
    marginBottom: 12,
  },
  sectionText: {
    color: colors.textSecondary,
    fontSize: 14,
    lineHeight: 22,
    backgroundColor: colors.surface,
    padding: 14,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colors.cardBorder,
  },
  chipGrid: {
    flexDirection: 'row',
    gap: 12,
  },
  chip: {
    flex: 1,
    backgroundColor: colors.surface,
    borderRadius: 14,
    padding: 14,
    borderWidth: 1,
    borderColor: colors.cardBorder,
  },
  chipLabel: {
    color: colors.textMuted,
    fontSize: 12,
    marginBottom: 6,
  },
  chipValue: {
    color: colors.text,
    fontSize: 13,
    fontWeight: '600',
  },
  programsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  programTag: {
    backgroundColor: 'rgba(91, 78, 255, 0.15)',
    paddingHorizontal: 14,
    paddingVertical: 7,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(91, 78, 255, 0.3)',
  },
  programTagText: {
    color: colors.primaryLight,
    fontSize: 13,
    fontWeight: '500',
  },
  applyBtn: {
    backgroundColor: colors.primary,
    marginHorizontal: 16,
    marginTop: 24,
    borderRadius: 16,
    paddingVertical: 16,
    alignItems: 'center',
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 12,
    elevation: 8,
  },
  applyBtnText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '700',
  },
  interestedBtn: {
    marginHorizontal: 16,
    marginTop: 12,
    borderRadius: 16,
    paddingVertical: 15,
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: colors.primary,
  },
  interestedBtnText: {
    color: colors.primaryLight,
    fontSize: 15,
    fontWeight: '600',
  },
});

export default DetailsScreen;
