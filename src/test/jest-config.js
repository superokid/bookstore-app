jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => jest.fn(),
  useNavigationParam: jest.fn(jest.requireActual('@react-navigation/native').useNavigationParam),
}));
