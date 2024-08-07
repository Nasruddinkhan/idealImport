import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { PieChart } from 'react-native-chart-kit';
import { PieChartData } from './../../common/custompiechart.type';

const screenWidth = Dimensions.get('window').width;
interface CustomPieChartProps {
    data: PieChartData[];
  }
const CustomPieChart: React.FC<CustomPieChartProps> = ({ data }) => {
  return (
    <View style={styles.container}>
      <PieChart
        data={data}
        width={screenWidth - 32} // Responsive width
        height={220}
        chartConfig={{
          backgroundColor: '#ffffff',
          backgroundGradientFrom: '#fb8c00',
          backgroundGradientTo: '#ffa726',
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          strokeWidth: 2, // optional, default 3
          barPercentage: 0.5,
        }}
        accessor="population"
        backgroundColor="transparent"
        paddingLeft="15"
        absolute // shows the values as absolute numbers
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
});

export default CustomPieChart;
