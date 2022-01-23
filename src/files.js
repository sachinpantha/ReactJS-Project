//This acts as database file for rendering
import Pdf from '../src/pdffiles/rdpd.pdf'
import Pdf1 from '../src/pdffiles/TII.pdf'
import Pdf2 from '../src/pdffiles/TSAONGAF.pdf'
import Pdf3 from '../src/pdffiles/TLL.pdf'
import Pdf4 from '../src/pdffiles/SWW.pdf'
import Pdf5 from '../src/pdffiles/TMIY.pdf'
import Pdf6 from '../src/pdffiles/GPP.pdf'
import Pdf7 from '../src/pdffiles/LEL.pdf'
import Pdf8 from '../src/pdffiles/SMT.pdf'
const books=
[  //CREATING ARRAY OF OBJECTS
{
  image:'https://images-na.ssl-images-amazon.com/images/I/81bsw6fnUiL.jpg',
  title: 'Rich dad poor dad',
  author: 'Robert T. Kiyosaki',
  location: Pdf
}
,
{
  image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmdN-OgjQLm940ivSwdipCZY6FLenw9p18sA&usqp=CAU',
  title: 'The intelligent investor',
  author: 'Benjamin Graham', 
  location: Pdf1 
}
,
{
  image:'https://covers.zlibcdn2.com/covers299/books/6c/d7/01/6cd7019852b43e6e67f5b21d8a60b1db.jpg',
  title: 'The subtle art of not giving a f*ck',
  author: 'Mark manson', 
  location: Pdf2,

},
{
  image:'https://covers.zlibcdn2.com/covers299/books/ae/d2/11/aed211bf01bb707e690cc9ad10d78840.jpg',
  title: 'A little life',
  author: 'Hanya Yanagihara', 
  location: Pdf3,

},
{
  image:'https://covers.zlibcdn2.com/covers299/books/ea/45/62/ea45628f0fff15f6d9d51c8076201780.jpg',
  title: 'Start with Why',
  author: 'Simon Sinek', 
  location: Pdf4,
},
{
  image:'https://covers.zlibcdn2.com/covers299/books/f7/c0/2c/f7c02cdc775bd935869fc419ac6be175.jpg',
  title: 'The mountain is you',
  author: 'Brianna wiest', 
  location: Pdf5,
},
{
  image:'https://covers.zlibcdn2.com/covers299/books/de/54/b5/de54b53efafa0ef3f39221fa770fce18.jpg',
  title: 'Games people play',
  author: 'Eric Berne', 
  location: Pdf6
},
{
  image:'https://covers.zlibcdn2.com/covers299/books/35/f5/ae/35f5aef4ba2bbaf59724b67edd1887ed.jpg',
  title: 'Leaders eat last',
  author: 'Simon sinek',
  location: Pdf7 
},
{
  image:'https://covers.zlibcdn2.com/covers299/books/a3/45/9c/a3459c403398638208308d220747d6c5.jpg',
  title: 'Smart thinking',
  author: 'Matthew Allen', 
  location: Pdf8,
},
]
export default books;