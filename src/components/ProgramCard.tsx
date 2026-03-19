import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { Program } from '../data/programs';
import { colors } from '../theme/colors';

const { width } = Dimensions.get('window');

interface Props {
  program: Program;
  onPress: () => void;
}

const ProgramCard: React.FC<Props> = ({ program, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.85}>
      <View style={styles.topRow}>
        <Text style={styles.flag}>{program.flag}</Text>
        <View style={styles.rankBadge}>
          <Text style={styles.rankText}>🏆 {program.ranking.split('|')[0].trim()}</Text>
        </View>
      </View>

      <Text style={styles.university}>{program.university}</Text>
      <Text style={styles.country}>📍 {program.country}</Text>
      <Text style={styles.description} numberOfLines={2}>
        {program.description}
      </Text>

      <View style={styles.footer}>
        <View style={styles.intakePill}>
          <Text style={styles.intakeText}>🗓 {program.intakeMonths}</Text>
        </View>
        <View style={styles.arrow}>
          <Text style={styles.arrowText}>→</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.card,
    borderRadius: 20,
    padding: 20,
    marginHorizontal: 16,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: colors.cardBorder,
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 5,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  flag: {
    fontSize: 36,
  },
  rankBadge: {
    backgroundColor: 'rgba(91, 78, 255, 0.18)',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(91, 78, 255, 0.35)',
  },
  rankText: {
    color: colors.primaryLight,
    fontSize: 11,
    fontWeight: '600',
  },
  university: {
    color: colors.text,
    fontSize: 17,
    fontWeight: '700',
    marginBottom: 4,
  },
  country: {
    color: colors.textSecondary,
    fontSize: 13,
    marginBottom: 8,
  },
  description: {
    color: colors.textMuted,
    fontSize: 13,
    lineHeight: 20,
    marginBottom: 14,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  intakePill: {
    backgroundColor: 'rgba(6, 214, 160, 0.12)',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(6, 214, 160, 0.3)',
  },
  intakeText: {
    color: colors.success,
    fontSize: 12,
    fontWeight: '500',
  },
  arrow: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrowText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '700',
  },
});

export default ProgramCard;
