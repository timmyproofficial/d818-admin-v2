import Heading from '@/components/customs/Heading';
import MenuCard from '@/components/customs/menu/MenuCard';
import user from '../assets/user.jpg';

const MenuPage = () => {
  return (
    <div>
      <Heading title="Menu" />

      <MenuCard
        img={user}
        name="Jollof Rice with Chicken and Plantain"
        description="A specially cooked rice recipe from West Africa. Delicious dish with ingred..."
        price={78}
        category="Africa Meal"
      />
    </div>
  );
};

export default MenuPage;
