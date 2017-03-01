var boardData = {
  boards:
  [
    {
      id: 'home',
      buttons: [
        { type: 'button', label: 'i', text: '', img: '' },
        { type: 'button', label: 'you', text: '', img: '' },
        { type: 'button', label: 'want', text: '', img: '' },
        { type: 'button', label: 'like', text: '', img: '' },
        { type: 'button', label: 'don\'t like', text: '', img: '' },
        { type: 'button', label: 'go', text: '', img: '' },
        { type: 'link', label: 'food', img: 'images/mulberry-symbols/food.svg', link: 'food' },
        { type: 'link', label: 'snacks', img: '', link: 'snacks' },
        { type: 'link', label: 'help', text: 'i need help', img: 'images/mulberry-symbols/first_aid_box.svg', link: 'help', output: true },
        { type: 'link', label: 'drinks', text: 'i want to drink', img: 'images/mulberry-symbols/drinks.svg', link: 'drinks', output: true },
        { type: 'link', label: 'feelings', text: '', img: '', link: 'feelings' },
        { type: 'link', label: 'numbers', text: '', img: '', link: 'numbers' },
        { type: 'link', label: 'shapes', text: '', img: 'images/mulberry-symbols/shapes.svg', link: 'shapes' },
        { type: 'link', label: 'animals', text: '', img: '', link: 'animals' },
        { type: 'link', label: 'colors', text: '', img: 'images/mulberry-symbols/colour.svg', link: 'colors' },
        { type: 'link', label: 'time', text: '', img: 'images/mulberry-symbols/clock.svg', link: 'time' },
        { type: 'link', label: 'clothing', text: '', img: 'images/mulberry-symbols/clothes_generic.svg', link: 'clothing' },
        { type: 'link', label: 'orientation', text: '', img: '', link: 'orientation' },
        { type: 'button', label: 'hello', text: '', img: 'images/mulberry-symbols/hello.svg' },
        { type: 'button', label: 'bad', text: '', img: 'images/mulberry-symbols/bad.svg' },
        { type: 'button', label: 'good', text: '', img: 'images/mulberry-symbols/good.svg' },
        { type: 'button', label: 'yes', text: '', img: 'images/mulberry-symbols/correct.svg' },
        { type: 'button', label: 'no', text: '', img: 'images/mulberry-symbols/mistake_no_wrong.svg' },
        { type: 'button', label: 'maybe', text: '', img: '' },
        { type: 'button', label: 'great', text: '', img: 'images/mulberry-symbols/great.svg' },
        { type: 'link', label: 'body', text: '', img: 'images/mulberry-symbols/body_outline.svg', link: 'body' },
        { type: 'button', label: 'thank you', text: '', img: '' }
      ]
    },
    {
      id: 'food',
      buttons: [
        { type: 'button', label: 'i want', text: '', img: '' },
        { type: 'button', label: 'i don\'t want', text: '', img: '' },
        { type: 'button', label: 'and', text: '', img: '' },
        { type: 'button', label: 'pizza', text: '', img: 'images/mulberry-symbols/pizza.svg' },
        { type: 'button', label: 'salad', text: '', img: 'images/mulberry-symbols/salad.svg' },
        { type: 'button', label: 'bread', text: '', img: 'images/mulberry-symbols/bread_slice.svg' },
        { type: 'button', label: 'boiled egg', text: '', img: 'images/mulberry-symbols/egg_boiled.svg' },
        { type: 'button', label: 'fried egg', text: '', img: 'images/mulberry-symbols/egg_fried.svg' },
        { type: 'button', label: 'croissant', text: '', img: 'images/mulberry-symbols/croissant.svg' },
        { type: 'button', label: 'cereal', text: '', img: 'images/mulberry-symbols/cereal.svg' },
        { type: 'button', label: 'porridge', text: '', img: 'images/mulberry-symbols/porridge.svg' },
        { type: 'button', label: 'pasta', text: '', img: 'images/mulberry-symbols/pasta.svg' },
        { type: 'button', label: 'chicken', text: '', img: 'images/mulberry-symbols/chicken.svg' },
        { type: 'button', label: 'beef', text: '', img: 'images/mulberry-symbols/beef.svg' },
        { type: 'button', label: 'fish', text: '', img: 'images/mulberry-symbols/fish.svg' },
        { type: 'button', label: 'rice', text: '', img: 'images/mulberry-symbols/rice.svg' },
        { type: 'button', label: 'sweet potato', text: '', img: 'images/mulberry-symbols/sweet_potato.svg' },
        { type: 'button', label: 'potato', text: '', img: 'images/mulberry-symbols/potato.svg' },
        { type: 'button', label: 'mashed potatoes', text: '', img: 'images/mulberry-symbols/mash_potato_1.svg' },
        { type: 'button', label: 'spaghetti bolognaise', text: '', img: 'images/mulberry-symbols/spaghetti_bolognaise.svg' },
        { type: 'button', label: 'hamburger', text: '', img: 'images/mulberry-symbols/hamburger.svg' },
        { type: 'button', label: 'hot dog', text: '', img: 'images/mulberry-symbols/hot_dog.svg' },
        { type: 'link', label: 'soup', text: '', img: 'images/mulberry-symbols/soup.svg', link: 'soup' },
        { type: 'link', label: 'drinks', text: '', img: 'images/mulberry-symbols/drinks.svg', link: 'drinks' },
        { type: 'link', label: 'vegetables', text: '', img: 'images/mulberry-symbols/vegetables.svg', link: 'vegetables' }
      ]
    },
    {
      id: 'drinks',
      buttons: [
        { type: 'button', label: 'i want', text: '', img: '' },
        { type: 'button', label: 'i don\'t want', text: '', img: '' },
        { type: 'button', label: 'water', text: '', img: 'images/mulberry-symbols/water.svg' },
        { type: 'button', label: 'orange juice', text: '', img: 'images/mulberry-symbols/orange_juice.svg' },
        { type: 'button', label: 'apple juice', text: '', img: 'images/mulberry-symbols/apple_juice.svg' },
        { type: 'button', label: 'grape juice', text: '', img: 'images/mulberry-symbols/grape_juice.svg' },
        { type: 'button', label: 'cranberry juice', text: '', img: 'images/mulberry-symbols/cranberry_juice.svg' },
        { type: 'button', label: 'pineapple juice', text: '', img: 'images/mulberry-symbols/pineapple_juice.svg' },
        { type: 'button', label: 'tea', text: '', img: 'images/mulberry-symbols/tea.svg' },
        { type: 'button', label: 'coffee', text: '', img: 'images/mulberry-symbols/coffee.svg' },
      ]
    },
    {
      id: 'soup',
      buttons: [
        { type: 'button', label: 'soup', text: '', img: 'images/mulberry-symbols/soup.svg' },
        { type: 'button', label: 'carrot soup', text: '', img: 'images/mulberry-symbols/soup_carrot.svg' },
        { type: 'button', label: 'chicken soup', text: '', img: 'images/mulberry-symbols/soup_chicken.svg' },
        { type: 'button', label: 'mushroom soup', text: '', img: 'images/mulberry-symbols/soup_mushroom.svg' },
        { type: 'button', label: 'onion soup', text: '', img: 'images/mulberry-symbols/soup_onion.svg' },
        { type: 'button', label: 'pea soup', text: '', img: 'images/mulberry-symbols/soup_pea.svg' },
        { type: 'button', label: 'tomato soup', text: '', img: 'images/mulberry-symbols/soup_tomato.svg' },
        { type: 'button', label: 'vegetable soup', text: '', img: 'images/mulberry-symbols/soup_vegetable.svg' }
      ]
    },
    {
      id: 'vegetables',
      buttons: [
        { type: 'button', label: 'beetroot', text: '', img: 'images/mulberry-symbols/beetroot.svg' },
        { type: 'button', label: 'carrot', text: '', img: 'images/mulberry-symbols/carrot.svg' },
        { type: 'button', label: 'tomato', text: '', img: 'images/mulberry-symbols/tomato.svg' },
        { type: 'button', label: 'cucumber', text: '', img: 'images/mulberry-symbols/cucumber.svg' },
        { type: 'button', label: 'cabbage', text: '', img: 'images/mulberry-symbols/cabbage.svg' },
        { type: 'button', label: 'onion', text: '', img: 'images/mulberry-symbols/onion.svg' },
        { type: 'button', label: 'spring onions', text: '', img: 'images/mulberry-symbols/spring_onions.svg' },
        { type: 'button', label: 'pepper', text: '', img: 'images/mulberry-symbols/pepper.svg' },
        { type: 'button', label: 'chilli pepper', text: '', img: 'images/mulberry-symbols/chilli_pepper.svg' },
        { type: 'button', label: 'lettuce', text: '', img: 'images/mulberry-symbols/lettuce.svg' },
        { type: 'button', label: 'asparagus', text: '', img: 'images/mulberry-symbols/asparagus.svg' },
        { type: 'button', label: 'radish', text: '', img: 'images/mulberry-symbols/radish.svg' },
        { type: 'button', label: 'aubergine', text: '', img: 'images/mulberry-symbols/aubergine.svg' },
        { type: 'button', label: 'broccoli', text: '', img: 'images/mulberry-symbols/broccoli.svg' },
        { type: 'button', label: 'peas', text: '', img: 'images/mulberry-symbols/peas.svg' },
      ]
    },
    {
      id: 'snacks',
      buttons: [
        { type: 'link', label: 'drinks', text: '', img: 'images/mulberry-symbols/drinks.svg', link: 'drinks' },
        { type: 'button', label: 'ice cream', text: '', img: 'images/mulberry-symbols/ice_cream.svg' },
        { type: 'button', label: 'chocolate', text: '', img: 'images/mulberry-symbols/chocolate.svg' },
        { type: 'link', label: 'fruit', text: '', img: 'images/mulberry-symbols/fruit.svg', link: 'fruit' },
        { type: 'button', label: 'crisps', text: '', img: 'images/mulberry-symbols/crisps.svg' },
        { type: 'button', label: 'marshmallows', text: '', img: 'images/mulberry-symbols/marshmallows.svg' },
        { type: 'button', label: 'milkshake', text: '', img: 'images/mulberry-symbols/milkshake.svg' },
        { type: 'button', label: 'pancakes', text: '', img: 'images/mulberry-symbols/pancakes.svg' },
        { type: 'button', label: 'biscuits', text: '', img: 'images/mulberry-symbols/biscuits.svg' }
      ]
    },
    {
      id: 'fruit',
      buttons: [
        { type: 'button', label: 'strawberry', text: '', img: 'images/mulberry-symbols/strawberry.svg' },
        { type: 'button', label: 'apple', text: '', img: 'images/mulberry-symbols/apple.svg' },
        { type: 'button', label: 'apricot', text: '', img: 'images/mulberry-symbols/apricot.svg' },
        { type: 'button', label: 'peach', text: '', img: 'images/mulberry-symbols/peach.svg' },
        { type: 'button', label: 'mango', text: '', img: 'images/mulberry-symbols/mango.svg' },
        { type: 'button', label: 'pear', text: '', img: 'images/mulberry-symbols/pear.svg' },
        { type: 'button', label: 'orange', text: '', img: 'images/mulberry-symbols/orange.svg' },
        { type: 'button', label: 'melon', text: '', img: 'images/mulberry-symbols/melon.svg' },
        { type: 'button', label: 'banana', text: '', img: 'images/mulberry-symbols/banana.svg' },
        { type: 'button', label: 'kiwi', text: '', img: 'images/mulberry-symbols/kiwi.svg' },
        { type: 'button', label: 'pineapple', text: '', img: 'images/mulberry-symbols/pineapple.svg' },
        { type: 'button', label: 'watermelon', text: '', img: 'images/mulberry-symbols/watermelon.svg' }
      ]
    },
    {
      id: 'orientation',
      buttons: [
        { type: 'button', label: 'up', text: '', img: 'images/mulberry-symbols/up.svg' },
        { type: 'button', label: 'down', text: '', img: 'images/mulberry-symbols/down.svg' },
        { type: 'button', label: 'left', text: '', img: 'images/mulberry-symbols/left.svg' },
        { type: 'button', label: 'right', text: '', img: 'images/mulberry-symbols/right.svg' },
        { type: 'button', label: 'above', text: '', img: 'images/mulberry-symbols/above.svg' },
        { type: 'button', label: 'below', text: '', img: 'images/mulberry-symbols/below.svg' },
        { type: 'button', label: 'on', text: '', img: 'images/mulberry-symbols/on.svg' },
        { type: 'button', label: 'under', text: '', img: 'images/mulberry-symbols/under_1.svg' }
      ]
    },
    {
      id: 'help',
      buttons: [
        { type: 'button', label: 'i am in pain', text: '', img: '' },
        { type: 'button', label: 'i am thirsty', text: '', img: 'images/mulberry-symbols/thirsty.svg' },
        { type: 'button', label: 'i am hungry', text: '', img: 'images/mulberry-symbols/hungry.svg' },
        { type: 'button', label: 'bathroom', text: 'i need to go to the bathroom', img: 'images/mulberry-symbols/need_toilet.svg' }
      ]
    },
    {
      id: 'feelings',
      buttons: [
        { type: 'button', label: 'i feel', text: '', img: '' },
        { type: 'button', label: 'you feel', text: '', img: '' },
        { type: 'button', label: 'happy', text: '', img: 'images/mulberry-symbols/happy_man.svg' },
        { type: 'button', label: 'sad', text: '', img: 'images/mulberry-symbols/sad_man.svg' },
        { type: 'button', label: 'angry', text: '', img: 'images/mulberry-symbols/angry_man.svg' },
        { type: 'button', label: 'afraid', text: '', img: 'images/mulberry-symbols/afraid_man.svg' },
        { type: 'button', label: 'disgusted', text: '', img: 'images/mulberry-symbols/disgusted_man.svg' },
        { type: 'button', label: 'confused', text: '', img: 'images/mulberry-symbols/confused_man.svg' }
      ]
    },
    {
      id: 'clothing',
      buttons: [
        { type: 'button', label: 'blouse', text: '', img: 'images/mulberry-symbols/blouse.svg' },
        { type: 'button', label: 'jacket', text: '', img: 'images/mulberry-symbols/jacket.svg' },
        { type: 'button', label: 'hat', text: '', img: 'images/mulberry-symbols/hat_-_mans.svg' },
        { type: 'button', label: 'boots', text: '', img: 'images/mulberry-symbols/boots.svg' },
        { type: 'button', label: 'bra', text: '', img: 'images/mulberry-symbols/bra.svg' },
        { type: 'button', label: 'boxer shorts', text: '', img: 'images/mulberry-symbols/boxer_shorts.svg' },
        { type: 'button', label: 'underwear', text: '', img: 'images/mulberry-symbols/pants.svg' },
        { type: 'button', label: 'trousers', text: '', img: 'images/mulberry-symbols/trousers.svg' },
        { type: 'button', label: 'shirt', text: '', img: 'images/mulberry-symbols/shirt.svg' },
        { type: 'button', label: 't-shirt', text: '', img: 'images/mulberry-symbols/t-shirt.svg' },
        { type: 'button', label: 'gloves', text: '', img: 'images/mulberry-symbols/gloves.svg' },
        { type: 'button', label: 'glasses', text: '', img: 'images/mulberry-symbols/glasses.svg' },
      ]
    },
    {
      id: 'body',
      buttons: [
        { type: 'button', label: 'head', text: '', img: 'images/mulberry-symbols/head.svg' },
        { type: 'button', label: 'face', text: '', img: 'images/mulberry-symbols/face_neutral_3.svg' },
        { type: 'button', label: 'eyes', text: '', img: 'images/mulberry-symbols/eyes.svg' },
        { type: 'button', label: 'cheek', text: '', img: 'images/mulberry-symbols/cheek.svg' },
        { type: 'button', label: 'ear', text: '', img: 'images/mulberry-symbols/ear.svg' },
        { type: 'button', label: 'lips', text: '', img: 'images/mulberry-symbols/lips_1.svg' },
        { type: 'button', label: 'teeth', text: '', img: 'images/mulberry-symbols/teeth.svg' },
        { type: 'button', label: 'chin', text: '', img: 'images/mulberry-symbols/chin.svg' },
        { type: 'button', label: 'neck', text: '', img: 'images/mulberry-symbols/neck.svg' },
        { type: 'button', label: 'shoulder', text: '', img: 'images/mulberry-symbols/shoulder.svg' },
        { type: 'button', label: 'stomach', text: '', img: 'images/mulberry-symbols/stomach_1.svg' },
        { type: 'button', label: 'back', text: '', img: 'images/mulberry-symbols/back.svg' },
        { type: 'button', label: 'arms', text: '', img: 'images/mulberry-symbols/arms.svg' },
        { type: 'button', label: 'right hand', text: '', img: 'images/mulberry-symbols/right_hand.svg' },
        { type: 'button', label: 'left hand', text: '', img: 'images/mulberry-symbols/left_hand.svg' },
        { type: 'button', label: 'finger', text: '', img: 'images/mulberry-symbols/finger.svg' },
        { type: 'button', label: 'leg', text: '', img: 'images/mulberry-symbols/leg.svg' },
        { type: 'button', label: 'foot', text: '', img: 'images/mulberry-symbols/foot.svg' },
      ]
    },
    {
      id: 'time',
      buttons: [
        { type: 'button', label: 'yesterday', text: '', img: 'images/mulberry-symbols/yesterday.svg' },
        { type: 'button', label: 'today', text: '', img: 'images/mulberry-symbols/today.svg' },
        { type: 'button', label: 'tomorrow', text: '', img: 'images/mulberry-symbols/tomorrow.svg' },
        { type: 'button', label: 'now', text: '', img: 'images/mulberry-symbols/now.svg' },
        { type: 'button', label: 'morning', text: '', img: 'images/mulberry-symbols/morning.svg' },
        { type: 'button', label: 'afternoon', text: '', img: 'images/mulberry-symbols/afternoon.svg' },
        { type: 'button', label: 'when', text: '', img: 'images/mulberry-symbols/when.svg' },
      ]
    },
    {
      id: 'animals',
      buttons: [
        { type: 'button', label: 'dog', text: '', img: 'images/mulberry-symbols/dog.svg' },
        { type: 'button', label: 'cat', text: '', img: 'images/mulberry-symbols/cat.svg' },
        { type: 'button', label: 'hamster', text: '', img: 'images/mulberry-symbols/hamster.svg' },
        { type: 'button', label: 'hedgehog', text: '', img: 'images/mulberry-symbols/hedgehog.svg' },
        { type: 'button', label: 'horse', text: '', img: 'images/mulberry-symbols/horse.svg' },
        { type: 'button', label: 'donkey', text: '', img: 'images/mulberry-symbols/donkey.svg' },
        { type: 'button', label: 'dove', text: '', img: 'images/mulberry-symbols/dove.svg' },
        { type: 'button', label: 'fox', text: '', img: 'images/mulberry-symbols/fox.svg' },
        { type: 'button', label: 'giraffe', text: '', img: 'images/mulberry-symbols/giraffe.svg' },
        { type: 'button', label: 'gorilla', text: '', img: 'images/mulberry-symbols/gorilla.svg' },
        { type: 'button', label: 'wolf', text: '', img: 'images/mulberry-symbols/wolf.svg' },
      ]
    },
    {
      id: 'colors',
      buttons: [
        { type: 'button', label: 'yellow', text: '', img: 'images/mulberry-symbols/yellow.svg' },
        { type: 'button', label: 'pink', text: '', img: 'images/mulberry-symbols/pink.svg' },
        { type: 'button', label: 'blue', text: '', img: 'images/mulberry-symbols/blue.svg' },
        { type: 'button', label: 'green', text: '', img: 'images/mulberry-symbols/green.svg' },
        { type: 'button', label: 'red', text: '', img: 'images/mulberry-symbols/red.svg' },
      ]
    },
    {
      id: 'numbers',
      buttons: [
        { type: 'button', label: 'zero', text: '', img: 'images/mulberry-symbols/Zero.svg' },
        { type: 'button', label: 'one', text: '', img: 'images/mulberry-symbols/one.svg' },
        { type: 'button', label: 'two', text: '', img: 'images/mulberry-symbols/two.svg' },
        { type: 'button', label: 'three', text: '', img: 'images/mulberry-symbols/three.svg' },
        { type: 'button', label: 'four', text: '', img: 'images/mulberry-symbols/four.svg' },
        { type: 'button', label: 'five', text: '', img: 'images/mulberry-symbols/five.svg' },
        { type: 'button', label: 'six', text: '', img: 'images/mulberry-symbols/six.svg' },
        { type: 'button', label: 'seven', text: '', img: 'images/mulberry-symbols/seven.svg' },
        { type: 'button', label: 'eight', text: '', img: 'images/mulberry-symbols/eight.svg' },
        { type: 'button', label: 'nine', text: '', img: 'images/mulberry-symbols/nine.svg' }
      ]
    },
    {
      id: 'shapes',
      buttons: [
        { type: 'button', label: 'square', text: '', img: 'images/mulberry-symbols/square.svg' },
        { type: 'button', label: 'circle', text: '', img: 'images/mulberry-symbols/circle.svg' },
        { type: 'button', label: 'hexagon', text: '', img: 'images/mulberry-symbols/hexagon.svg' },
      ]
    }
  ]
};

module.exports = boardData;