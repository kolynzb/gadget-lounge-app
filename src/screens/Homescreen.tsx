import {StyleSheet, ScrollView, View, FlatList} from 'react-native';
import React from 'react';
import WelcomeHeaderSection from '../components/WelcomeHeaderSection';
import {ScreenView, Spacer} from '../components/layout';
import SearchBar from '../components/SearchBar';
import SectionHeaderTitle from '../components/SectionHeaderTitle';
import SpecialOfferCard from '../components/cards/SpecialOfferCard';
import SmallFilterButton from '../components/buttons/SmallFilterButton';
import ProductCard from '../components/cards/ProductCard';
import products from '../data/products';
import brands from '../data/brands';
import BrandIcon from '../components/BrandIcon';
// import {HomeScreenNavigationProp} from '../types/navigation';

type Props = {
  navigation: any;
  // navigation: HomeScreenNavigationProp ;
};

const HomeScreen = (props: Props) => {
  return (
    <ScreenView>
      <WelcomeHeaderSection
        name="Sarah Schaller"
        avatar="https://res.cloudinary.com/kolynz-b/image/upload/v1638636909/ko.lynz_b_218871186_831566384142117_7643572219233961744_n_wcsj3e.jpg"
      />
      <Spacer size={15} />
      <ScrollView>
        <SearchBar />
        <Spacer size={20} />

        <SectionHeaderTitle heading="Special Offers" />
        <Spacer size={20} />

        <SpecialOfferCard
          percentage={20}
          title="Today's Special!"
          message="Get discount for every order, only valid for today"
          image="https://res.cloudinary.com/kolynz-b/image/upload/v1638636909/ko.lynz_b_218871186_831566384142117_7643572219233961744_n_wcsj3e.jpg"
        />
        <Spacer size={20} />

        <FlatList
          data={brands.slice(0, 8)}
          style={styles.brandList}
          ItemSeparatorComponent={() => <Spacer size={10} horizontal />}
          columnWrapperStyle={{justifyContent: 'space-between'}}
          renderItem={({item}) => (
            <BrandIcon name={item.name} image={item.logo} />
          )}
          numColumns={4}
        />
        <Spacer size={20} />
        <SectionHeaderTitle heading="Most Popular" />
        <Spacer size={20} />
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <SmallFilterButton text="All" active />
            <Spacer size={10} horizontal />
            <SmallFilterButton text="Samsang" />
            <Spacer size={10} horizontal />
            <SmallFilterButton text="Apple" />
            <Spacer size={10} horizontal />
            <SmallFilterButton text="Lenovo" />
            <Spacer size={10} horizontal />
            <SmallFilterButton text="Google" />
            <Spacer size={10} horizontal />
            <SmallFilterButton text="Tecno" />
            <Spacer size={10} horizontal />
          </ScrollView>
        </View>
        <Spacer size={25} />

        <FlatList
          style={styles.productList}
          data={products}
          columnWrapperStyle={{justifyContent: 'space-between'}}
          renderItem={({item}) => (
            <ProductCard navigation={props.navigation} product={item} />
          )}
          ItemSeparatorComponent={() => <Spacer size={20} horizontal />}
          numColumns={2}
          // columnWrapperStyle={{justifyContent: 'center'}}
        />
      </ScrollView>
    </ScreenView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  productList: {
    width: '100%',
  },
  brandList: {},
});
