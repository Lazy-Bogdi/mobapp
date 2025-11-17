import { PropsWithChildren } from 'react';
import { StyleSheet, View } from 'react-native';

type ContentContainerProps = PropsWithChildren<{
  backgroundColor?: string;
}>;

export function ContentContainer({ children, backgroundColor }: ContentContainerProps) {
  return (
    <View
      style={[
        styles.container,
        backgroundColor
          ? {
              backgroundColor,
            }
          : null,
      ]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 18,
    backgroundColor: '#f0f6ff',
    gap: 8,
    marginBottom: 20,
  },
});

