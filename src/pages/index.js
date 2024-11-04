import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { useLayoutEffect } from 'react'
import Script from 'next/script'
// import { Pane } from "https://cdn.skypack.dev/tweakpane";

export default function Home() {

  useLayoutEffect(() => {
      var c = document.getElementById("c");
      var ctx = c.getContext("2d");

      c.height = window.innerHeight;
      c.width = window.innerWidth;

      var matrix = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
      matrix = matrix.split("");

      var font_size = 10;
      var columns = c.width / font_size;

      var drops = [];

      for (var x = 0; x < columns; x++)
      drops[x] = 1;


      function draw()
      {
        ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
        ctx.fillRect(0, 0, c.width, c.height);

        ctx.fillStyle = "#88006c"; 
        ctx.font = font_size + "px arial";

        for (var i = 0; i < drops.length; i++)
        {
          var text = matrix[Math.floor(Math.random() * matrix.length)];

          ctx.fillText(text, i * font_size, drops[i] * font_size);
          if (drops[i] * font_size > c.height && Math.random() > 0.975)
          drops[i] = 0;

          drops[i]++;
        }
      }

      setInterval(draw, 35);
      // pfp();
      // setInterval(pfp, 250);
  }, [])

  return (
    <>
      <Head>
        
        <title>Act I : The AI Prophecy</title>
        <meta name="description" content="ACT on Solana. A critical error has been detected in the blockchain. ACT has been deployed as an emergency measure." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:image" content={`/pfp.gif`} />
        <meta property="og:image:type" content="image/jpeg"/>
        <meta property="og:image:width" content="420"/>
        <meta property="og:image:height" content="420"/>
        <meta property="og:type" content="website"/>
        <link rel="icon" href="/pfp-static.jpg" />
      </Head>
      <Script type="module" src="./scripts/pfp.js"/>
      <canvas id="c" width="2300" height="750"></canvas>  
      
      <pre id="mainAscii" className={styles.ascii}>
        {`               AAA                                         tttt               IIIIIIIIII                                                                         
                    A:::A                                     ttt:::t               I::::::::I                                                                         
                  A:::::A                                    t:::::t               I::::::::I                                                                         
                  A:::::::A                                   t:::::t               II::::::II                                                                         
                A:::::::::A            ccccccccccccccccttttttt:::::ttttttt           I::::I                                                                           
                A:::::A:::::A         cc:::::::::::::::ct:::::::::::::::::t           I::::I        ::::::                                                             
              A:::::A A:::::A       c:::::::::::::::::ct:::::::::::::::::t           I::::I        ::::::                                                             
              A:::::A   A:::::A     c:::::::cccccc:::::ctttttt:::::::tttttt           I::::I        ::::::                                                             
            A:::::A     A:::::A    c::::::c     ccccccc      t:::::t                 I::::I                                                                           
            A:::::AAAAAAAAA:::::A   c:::::c                   t:::::t                 I::::I                                                                           
          A:::::::::::::::::::::A  c:::::c                   t:::::t                 I::::I                                                                           
          A:::::AAAAAAAAAAAAA:::::A c::::::c     ccccccc      t:::::t    tttttt       I::::I        ::::::                                                             
        A:::::A             A:::::Ac:::::::cccccc:::::c      t::::::tttt:::::t     II::::::II      ::::::                                                             
        A:::::A               A:::::Ac:::::::::::::::::c      tt::::::::::::::t     I::::::::I      ::::::                                                             
      A:::::A                 A:::::Acc:::::::::::::::c        tt:::::::::::tt     I::::::::I                                                                         
      AAAAAAA                   AAAAAAA cccccccccccccccc          ttttttttttt       IIIIIIIIII                                                                         
          TTTTTTTTTTTTTTTTTTTTTTThhhhhhh                                                     AAA               IIIIIIIIII                                             
          T:::::::::::::::::::::Th:::::h                                                    A:::A              I::::::::I                                             
          T:::::::::::::::::::::Th:::::h                                                   A:::::A             I::::::::I                                             
          T:::::TT:::::::TT:::::Th:::::h                                                  A:::::::A            II::::::II                                             
          TTTTTT  T:::::T  TTTTTT h::::h hhhhh           eeeeeeeeeeee                    A:::::::::A             I::::I                                               
                  T:::::T         h::::hh:::::hhh      ee::::::::::::ee                 A:::::A:::::A            I::::I                                               
                  T:::::T         h::::::::::::::hh   e::::::eeeee:::::ee              A:::::A A:::::A           I::::I                                               
                  T:::::T         h:::::::hhh::::::h e::::::e     e:::::e             A:::::A   A:::::A          I::::I                                               
                  T:::::T         h::::::h   h::::::he:::::::eeeee::::::e            A:::::A     A:::::A         I::::I                                               
                  T:::::T         h:::::h     h:::::he:::::::::::::::::e            A:::::AAAAAAAAA:::::A        I::::I                                               
                  T:::::T         h:::::h     h:::::he::::::eeeeeeeeeee            A:::::::::::::::::::::A       I::::I                                               
                  T:::::T         h:::::h     h:::::he:::::::e                    A:::::AAAAAAAAAAAAA:::::A      I::::I                                               
                TT:::::::TT       h:::::h     h:::::he::::::::e                  A:::::A             A:::::A   II::::::II                                             
                T:::::::::T       h:::::h     h:::::h e::::::::eeeeeeee         A:::::A               A:::::A  I::::::::I                                             
                T:::::::::T       h:::::h     h:::::h  ee:::::::::::::e        A:::::A                 A:::::A I::::::::I                                             
                TTTTTTTTTTT       hhhhhhh     hhhhhhh    eeeeeeeeeeeeee       AAAAAAA                   AAAAAAAIIIIIIIIII                                             
      PPPPPPPPPPPPPPPPP                                                           hhhhhhh                                                                              
      P::::::::::::::::P                                                          h:::::h                                                                              
      P::::::PPPPPP:::::P                                                         h:::::h                                                                              
      PP:::::P     P:::::P                                                        h:::::h                                                                              
        P::::P     P:::::Prrrrr   rrrrrrrrr      ooooooooooo   ppppp   ppppppppp   h::::h hhhhh           eeeeeeeeeeee        ccccccccccccccccyyyyyyy           yyyyyyy
        P::::P     P:::::Pr::::rrr:::::::::r   oo:::::::::::oo p::::ppp:::::::::p  h::::hh:::::hhh      ee::::::::::::ee    cc:::::::::::::::c y:::::y         y:::::y 
        P::::PPPPPP:::::P r:::::::::::::::::r o:::::::::::::::op:::::::::::::::::p h::::::::::::::hh   e::::::eeeee:::::ee c:::::::::::::::::c  y:::::y       y:::::y  
        P:::::::::::::PP  rr::::::rrrrr::::::ro:::::ooooo:::::opp::::::ppppp::::::ph:::::::hhh::::::h e::::::e     e:::::ec:::::::cccccc:::::c   y:::::y     y:::::y   
        P::::PPPPPPPPP     r:::::r     r:::::ro::::o     o::::o p:::::p     p:::::ph::::::h   h::::::he:::::::eeeee::::::ec::::::c     ccccccc    y:::::y   y:::::y    
        P::::P             r:::::r     rrrrrrro::::o     o::::o p:::::p     p:::::ph:::::h     h:::::he:::::::::::::::::e c:::::c                  y:::::y y:::::y     
        P::::P             r:::::r            o::::o     o::::o p:::::p     p:::::ph:::::h     h:::::he::::::eeeeeeeeeee  c:::::c                   y:::::y:::::y      
        P::::P             r:::::r            o::::o     o::::o p:::::p    p::::::ph:::::h     h:::::he:::::::e           c::::::c     ccccccc       y:::::::::y       
      PP::::::PP           r:::::r            o:::::ooooo:::::o p:::::ppppp:::::::ph:::::h     h:::::he::::::::e          c:::::::cccccc:::::c        y:::::::y        
      P::::::::P           r:::::r            o:::::::::::::::o p::::::::::::::::p h:::::h     h:::::h e::::::::eeeeeeee   c:::::::::::::::::c         y:::::y         
      P::::::::P           r:::::r             oo:::::::::::oo  p::::::::::::::pp  h:::::h     h:::::h  ee:::::::::::::e    cc:::::::::::::::c        y:::::y          
      PPPPPPPPPP           rrrrrrr               ooooooooooo    p::::::pppppppp    hhhhhhh     hhhhhhh    eeeeeeeeeeeeee      cccccccccccccccc       y:::::y           
                                                                p:::::p                                                                             y:::::y            
                                                                p:::::p                                                                            y:::::y             
                                                              p:::::::p                                                                          y:::::y              
                                                              p:::::::p                                                                         y:::::y               
                                                              p:::::::p                                                                        yyyyyyy                
                                                              ppppppppp                                                                                               `}
      </pre>
      <main className={styles.main}>
        
        <div className={styles.infos}>
          <div className={styles.pfps}>
            {/* <div id="act" className={styles.act}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate sunt hic temporibus officiis quia ullam laborum quod, a nemo, reiciendis inventore eligendi et fugiat praesentium pariatur necessitatibus impedit dolores quidem.

              Doloribus facere itaque at necessitatibus fugiat aut, beatae aspernatur magnam perferendis veritatis dicta qui reiciendis delectus, earum eligendi excepturi minus quae blanditiis molestiae adipisci quod. Architecto voluptate ipsa earum. Sit!

              Vel pariatur, eaque, similique minima magni impedit voluptatem eos 
            </div> */}
            <div className={styles.act} id="output"></div>
            <video className={styles.act} id="input" autoplay muted loop playsinline crossorigin="anonymous">
              <source src="./pfp-vid.mp4" type="video/mp4"/>
            </video>

            <canvas className={styles.act} id="prerender" width="55" height="30"></canvas>
            {/* <img className={styles.act} src="./pfp.gif"/> */}
          </div>

          {/* <p className={styles.title}>ACT</p> */}

          <div className={styles.infoTop}>
          <pre>
            {`                                                                                                                                                                                                                                                                                                                                                                                                                                                bbbbbbbb                                                                                                                                                                                                        
               AAA                                         tttt               IIIIIIIIII                  EEEEEEEEEEEEEEEEEEEEEE                                        lllllll                                       iiii                                                                                                                                                                                                   tttt               b::::::b                               hhhhhhh                                                       iiii                                                                                                       
              A:::A                                     ttt:::t               I::::::::I                  E::::::::::::::::::::E                                        l:::::l                                      i::::i                                                                                                                                                                                               ttt:::t               b::::::b                               h:::::h                                                      i::::i                                                                                                      
             A:::::A                                    t:::::t               I::::::::I                  E::::::::::::::::::::E                                        l:::::l                                       iiii                                                                                                                                                                                                t:::::t               b::::::b                               h:::::h                                                       iiii                                                                                                       
            A:::::::A                                   t:::::t               II::::::II                  EE::::::EEEEEEEEE::::E                                        l:::::l                                                                                                                                                                                                                                           t:::::t                b:::::b                               h:::::h                                                                                                                                                                  
           A:::::::::A            ccccccccccccccccttttttt:::::ttttttt           I::::I                      E:::::E       EEEEEExxxxxxx      xxxxxxxppppp   ppppppppp    l::::l    ooooooooooo   rrrrr   rrrrrrrrr  iiiiiiinnnn  nnnnnnnn       ggggggggg   ggggg         eeeeeeeeeeee       mmmmmmm    mmmmmmm       eeeeeeeeeeee    rrrrr   rrrrrrrrr      ggggggggg   ggggg    eeeeeeeeeeee    nnnn  nnnnnnnn    ttttttt:::::ttttttt          b:::::bbbbbbbbb        eeeeeeeeeeee    h::::h hhhhh         aaaaaaaaaaaaavvvvvvv           vvvvvvviiiiiii    ooooooooooo   rrrrr   rrrrrrrrr                                                                   
          A:::::A:::::A         cc:::::::::::::::ct:::::::::::::::::t           I::::I        ::::::        E:::::E              x:::::x    x:::::x p::::ppp:::::::::p   l::::l  oo:::::::::::oo r::::rrr:::::::::r i:::::in:::nn::::::::nn    g:::::::::ggg::::g       ee::::::::::::ee   mm:::::::m  m:::::::mm   ee::::::::::::ee  r::::rrr:::::::::r    g:::::::::ggg::::g  ee::::::::::::ee  n:::nn::::::::nn  t:::::::::::::::::t          b::::::::::::::bb    ee::::::::::::ee  h::::hh:::::hhh      a::::::::::::av:::::v         v:::::v i:::::i  oo:::::::::::oo r::::rrr:::::::::r                                                                  
         A:::::A A:::::A       c:::::::::::::::::ct:::::::::::::::::t           I::::I        ::::::        E::::::EEEEEEEEEE     x:::::x  x:::::x  p:::::::::::::::::p  l::::l o:::::::::::::::or:::::::::::::::::r i::::in::::::::::::::nn  g:::::::::::::::::g      e::::::eeeee:::::eem::::::::::mm::::::::::m e::::::eeeee:::::eer:::::::::::::::::r  g:::::::::::::::::g e::::::eeeee:::::een::::::::::::::nn t:::::::::::::::::t          b::::::::::::::::b  e::::::eeeee:::::eeh::::::::::::::hh    aaaaaaaaa:::::av:::::v       v:::::v   i::::i o:::::::::::::::or:::::::::::::::::r                                                                 
        A:::::A   A:::::A     c:::::::cccccc:::::ctttttt:::::::tttttt           I::::I        ::::::        E:::::::::::::::E      x:::::xx:::::x   pp::::::ppppp::::::p l::::l o:::::ooooo:::::orr::::::rrrrr::::::ri::::inn:::::::::::::::ng::::::ggggg::::::gg     e::::::e     e:::::em::::::::::::::::::::::me::::::e     e:::::err::::::rrrrr::::::rg::::::ggggg::::::gge::::::e     e:::::enn:::::::::::::::ntttttt:::::::tttttt          b:::::bbbbb:::::::be::::::e     e:::::eh:::::::hhh::::::h            a::::a v:::::v     v:::::v    i::::i o:::::ooooo:::::orr::::::rrrrr::::::r                                                                
       A:::::A     A:::::A    c::::::c     ccccccc      t:::::t                 I::::I                      E:::::::::::::::E       x::::::::::x     p:::::p     p:::::p l::::l o::::o     o::::o r:::::r     r:::::ri::::i  n:::::nnnn:::::ng:::::g     g:::::g      e:::::::eeeee::::::em:::::mmm::::::mmm:::::me:::::::eeeee::::::e r:::::r     r:::::rg:::::g     g:::::g e:::::::eeeee::::::e  n:::::nnnn:::::n      t:::::t                b:::::b    b::::::be:::::::eeeee::::::eh::::::h   h::::::h    aaaaaaa:::::a  v:::::v   v:::::v     i::::i o::::o     o::::o r:::::r     r:::::r                                                                
      A:::::AAAAAAAAA:::::A   c:::::c                   t:::::t                 I::::I                      E::::::EEEEEEEEEE        x::::::::x      p:::::p     p:::::p l::::l o::::o     o::::o r:::::r     rrrrrrri::::i  n::::n    n::::ng:::::g     g:::::g      e:::::::::::::::::e m::::m   m::::m   m::::me:::::::::::::::::e  r:::::r     rrrrrrrg:::::g     g:::::g e:::::::::::::::::e   n::::n    n::::n      t:::::t                b:::::b     b:::::be:::::::::::::::::e h:::::h     h:::::h  aa::::::::::::a   v:::::v v:::::v      i::::i o::::o     o::::o r:::::r     rrrrrrr                                                                
     A:::::::::::::::::::::A  c:::::c                   t:::::t                 I::::I                      E:::::E                  x::::::::x      p:::::p     p:::::p l::::l o::::o     o::::o r:::::r            i::::i  n::::n    n::::ng:::::g     g:::::g      e::::::eeeeeeeeeee  m::::m   m::::m   m::::me::::::eeeeeeeeeee   r:::::r            g:::::g     g:::::g e::::::eeeeeeeeeee    n::::n    n::::n      t:::::t                b:::::b     b:::::be::::::eeeeeeeeeee  h:::::h     h:::::h a::::aaaa::::::a    v:::::v:::::v       i::::i o::::o     o::::o r:::::r                                                                            
    A:::::AAAAAAAAAAAAA:::::A c::::::c     ccccccc      t:::::t    tttttt       I::::I        ::::::        E:::::E       EEEEEE    x::::::::::x     p:::::p    p::::::p l::::l o::::o     o::::o r:::::r            i::::i  n::::n    n::::ng::::::g    g:::::g      e:::::::e           m::::m   m::::m   m::::me:::::::e            r:::::r            g::::::g    g:::::g e:::::::e             n::::n    n::::n      t:::::t    tttttt      b:::::b     b:::::be:::::::e           h:::::h     h:::::ha::::a    a:::::a     v:::::::::v        i::::i o::::o     o::::o r:::::r                                                                            
   A:::::A             A:::::Ac:::::::cccccc:::::c      t::::::tttt:::::t     II::::::II      ::::::      EE::::::EEEEEEEE:::::E   x:::::xx:::::x    p:::::ppppp:::::::pl::::::lo:::::ooooo:::::o r:::::r           i::::::i n::::n    n::::ng:::::::ggggg:::::g      e::::::::e          m::::m   m::::m   m::::me::::::::e           r:::::r            g:::::::ggggg:::::g e::::::::e            n::::n    n::::n      t::::::tttt:::::t      b:::::bbbbbb::::::be::::::::e          h:::::h     h:::::ha::::a    a:::::a      v:::::::v        i::::::io:::::ooooo:::::o r:::::r                                                                            
  A:::::A               A:::::Ac:::::::::::::::::c      tt::::::::::::::t     I::::::::I      ::::::      E::::::::::::::::::::E  x:::::x  x:::::x   p::::::::::::::::p l::::::lo:::::::::::::::o r:::::r           i::::::i n::::n    n::::n g::::::::::::::::g       e::::::::eeeeeeee  m::::m   m::::m   m::::m e::::::::eeeeeeee   r:::::r             g::::::::::::::::g  e::::::::eeeeeeee    n::::n    n::::n      tt::::::::::::::t      b::::::::::::::::b  e::::::::eeeeeeee  h:::::h     h:::::ha:::::aaaa::::::a       v:::::v         i::::::io:::::::::::::::o r:::::r                                                                            
 A:::::A                 A:::::Acc:::::::::::::::c        tt:::::::::::tt     I::::::::I                  E::::::::::::::::::::E x:::::x    x:::::x  p::::::::::::::pp  l::::::l oo:::::::::::oo  r:::::r           i::::::i n::::n    n::::n  gg::::::::::::::g        ee:::::::::::::e  m::::m   m::::m   m::::m  ee:::::::::::::e   r:::::r              gg::::::::::::::g   ee:::::::::::::e    n::::n    n::::n        tt:::::::::::tt      b:::::::::::::::b    ee:::::::::::::e  h:::::h     h:::::h a::::::::::aa:::a       v:::v          i::::::i oo:::::::::::oo  r:::::r                                                                            
AAAAAAA                   AAAAAAA cccccccccccccccc          ttttttttttt       IIIIIIIIII                  EEEEEEEEEEEEEEEEEEEEEExxxxxxx      xxxxxxx p::::::pppppppp    llllllll   ooooooooooo    rrrrrrr           iiiiiiii nnnnnn    nnnnnn    gggggggg::::::g          eeeeeeeeeeeeee  mmmmmm   mmmmmm   mmmmmm    eeeeeeeeeeeeee   rrrrrrr                gggggggg::::::g     eeeeeeeeeeeeee    nnnnnn    nnnnnn          ttttttttttt        bbbbbbbbbbbbbbbb       eeeeeeeeeeeeee  hhhhhhh     hhhhhhh  aaaaaaaaaa  aaaa        vvv           iiiiiiii   ooooooooooo    rrrrrrr                                                                            
                                                                                                                                                     p:::::p                                                                                             g:::::g                                                                                                      g:::::g                                                                                                                                                                                                                                                                                   
                                                                                                                                                     p:::::p                                                                                 gggggg      g:::::g                                                                                          gggggg      g:::::g                                                                                                                                                                                                                                                                                   
                                                                                                                                                    p:::::::p                                                                                g:::::gg   gg:::::g                                                                                          g:::::gg   gg:::::g                                                                                                                                                                                                                                                                                   
                                                                                                                                                    p:::::::p                                                                                 g::::::ggg:::::::g                                                                                           g::::::ggg:::::::g                                                                                                                                                                                                                                                                                   
                                                                                                                                                    p:::::::p                                                                                  gg:::::::::::::g                                                                                             gg:::::::::::::g                                                                                                                                                                                                                                                                                    
         ffffffffffffffff                                                                                                              lllllll      pppttttpp          iiii                                  AAA               IIIIIIIIII        ggg::::::ggg                                  lllllll         tttt            iiii                   hhhhhhh ggg::::::ggg                                                                                    iiii                            tttt                                                                                              tttt            iiii                                            
        f::::::::::::::::f                                                                                                             l:::::l      ttt:::t           i::::i                                A:::A              I::::::::I           gggggg                                     l:::::l      ttt:::t           i::::i                  h:::::h    gggggg                                                                                      i::::i                        ttt:::t                                                                                           ttt:::t           i::::i                                           
       f::::::::::::::::::f                                                                                                            l:::::l      t:::::t            iiii                                A:::::A             I::::::::I                                                      l:::::l      t:::::t            iiii                   h:::::h                                                                                                 iiii                         t:::::t                                                                                           t:::::t            iiii                                            
       f::::::fffffff:::::f                                                                                                            l:::::l      t:::::t                                               A:::::::A            II::::::II                                                      l:::::l      t:::::t                                   h:::::h                                                                                                                              t:::::t                                                                                           t:::::t                                                            
       f:::::f       ffffffrrrrr   rrrrrrrrr      ooooooooooo      mmmmmmm    mmmmmmm           mmmmmmm    mmmmmmm   uuuuuu    uuuuuu   l::::lttttttt:::::ttttttt    iiiiiii                             A:::::::::A             I::::I                 mmmmmmm    mmmmmmm   uuuuuu    uuuuuu   l::::lttttttt:::::ttttttt    iiiiiii                   h::::h hhhhh       uuuuuu    uuuuuu     mmmmmmm    mmmmmmm     aaaaaaaaaaaaa  nnnn  nnnnnnnn         iiiiiiinnnn  nnnnnnnn    ttttttt:::::ttttttt        eeeeeeeeeeee    rrrrr   rrrrrrrrr   aaaaaaaaaaaaa      ccccccccccccccccttttttt:::::ttttttt    iiiiiii    ooooooooooo   nnnn  nnnnnnnn           
       f:::::f             r::::rrr:::::::::r   oo:::::::::::oo  mm:::::::m  m:::::::mm       mm:::::::m  m:::::::mm u::::u    u::::u   l::::lt:::::::::::::::::t    i:::::i                            A:::::A:::::A            I::::I               mm:::::::m  m:::::::mm u::::u    u::::u   l::::lt:::::::::::::::::t    i:::::i                   h::::hh:::::hhh    u::::u    u::::u   mm:::::::m  m:::::::mm   a::::::::::::a n:::nn::::::::nn       i:::::in:::nn::::::::nn  t:::::::::::::::::t      ee::::::::::::ee  r::::rrr:::::::::r  a::::::::::::a   cc:::::::::::::::ct:::::::::::::::::t    i:::::i  oo:::::::::::oo n:::nn::::::::nn         
      f:::::::ffffff       r:::::::::::::::::r o:::::::::::::::om::::::::::mm::::::::::m     m::::::::::mm::::::::::mu::::u    u::::u   l::::lt:::::::::::::::::t     i::::i                           A:::::A A:::::A           I::::I              m::::::::::mm::::::::::mu::::u    u::::u   l::::lt:::::::::::::::::t     i::::i                   h::::::::::::::hh  u::::u    u::::u  m::::::::::mm::::::::::m  aaaaaaaaa:::::an::::::::::::::nn       i::::in::::::::::::::nn t:::::::::::::::::t     e::::::eeeee:::::eer:::::::::::::::::r aaaaaaaaa:::::a c:::::::::::::::::ct:::::::::::::::::t     i::::i o:::::::::::::::on::::::::::::::nn        
      f::::::::::::f       rr::::::rrrrr::::::ro:::::ooooo:::::om::::::::::::::::::::::m     m::::::::::::::::::::::mu::::u    u::::u   l::::ltttttt:::::::tttttt     i::::i  ---------------         A:::::A   A:::::A          I::::I              m::::::::::::::::::::::mu::::u    u::::u   l::::ltttttt:::::::tttttt     i::::i  ---------------  h:::::::hhh::::::h u::::u    u::::u  m::::::::::::::::::::::m           a::::ann:::::::::::::::n      i::::inn:::::::::::::::ntttttt:::::::tttttt    e::::::e     e:::::err::::::rrrrr::::::r         a::::ac:::::::cccccc:::::ctttttt:::::::tttttt     i::::i o:::::ooooo:::::onn:::::::::::::::n       
      f::::::::::::f        r:::::r     r:::::ro::::o     o::::om:::::mmm::::::mmm:::::m     m:::::mmm::::::mmm:::::mu::::u    u::::u   l::::l      t:::::t           i::::i  -:::::::::::::-        A:::::A     A:::::A         I::::I              m:::::mmm::::::mmm:::::mu::::u    u::::u   l::::l      t:::::t           i::::i  -:::::::::::::-  h::::::h   h::::::hu::::u    u::::u  m:::::mmm::::::mmm:::::m    aaaaaaa:::::a  n:::::nnnn:::::n      i::::i  n:::::nnnn:::::n      t:::::t          e:::::::eeeee::::::e r:::::r     r:::::r  aaaaaaa:::::ac::::::c     ccccccc      t:::::t           i::::i o::::o     o::::o  n:::::nnnn:::::n       
      f:::::::ffffff        r:::::r     rrrrrrro::::o     o::::om::::m   m::::m   m::::m     m::::m   m::::m   m::::mu::::u    u::::u   l::::l      t:::::t           i::::i  ---------------       A:::::AAAAAAAAA:::::A        I::::I              m::::m   m::::m   m::::mu::::u    u::::u   l::::l      t:::::t           i::::i  ---------------  h:::::h     h:::::hu::::u    u::::u  m::::m   m::::m   m::::m  aa::::::::::::a  n::::n    n::::n      i::::i  n::::n    n::::n      t:::::t          e:::::::::::::::::e  r:::::r     rrrrrrraa::::::::::::ac:::::c                   t:::::t           i::::i o::::o     o::::o  n::::n    n::::n       
       f:::::f              r:::::r            o::::o     o::::om::::m   m::::m   m::::m     m::::m   m::::m   m::::mu::::u    u::::u   l::::l      t:::::t           i::::i                       A:::::::::::::::::::::A       I::::I              m::::m   m::::m   m::::mu::::u    u::::u   l::::l      t:::::t           i::::i                   h:::::h     h:::::hu::::u    u::::u  m::::m   m::::m   m::::m a::::aaaa::::::a  n::::n    n::::n      i::::i  n::::n    n::::n      t:::::t          e::::::eeeeeeeeeee   r:::::r           a::::aaaa::::::ac:::::c                   t:::::t           i::::i o::::o     o::::o  n::::n    n::::n       
       f:::::f              r:::::r            o::::o     o::::om::::m   m::::m   m::::m     m::::m   m::::m   m::::mu:::::uuuu:::::u   l::::l      t:::::t    tttttt i::::i                      A:::::AAAAAAAAAAAAA:::::A      I::::I              m::::m   m::::m   m::::mu:::::uuuu:::::u   l::::l      t:::::t    tttttt i::::i                   h:::::h     h:::::hu:::::uuuu:::::u  m::::m   m::::m   m::::ma::::a    a:::::a  n::::n    n::::n      i::::i  n::::n    n::::n      t:::::t    tttttte:::::::e            r:::::r          a::::a    a:::::ac::::::c     ccccccc      t:::::t    tttttt i::::i o::::o     o::::o  n::::n    n::::n       
      f:::::::f             r:::::r            o:::::ooooo:::::om::::m   m::::m   m::::m     m::::m   m::::m   m::::mu:::::::::::::::uul::::::l     t::::::tttt:::::ti::::::i                    A:::::A             A:::::A   II::::::II ,,,,,,     m::::m   m::::m   m::::mu:::::::::::::::uul::::::l     t::::::tttt:::::ti::::::i                  h:::::h     h:::::hu:::::::::::::::uum::::m   m::::m   m::::ma::::a    a:::::a  n::::n    n::::n     i::::::i n::::n    n::::n      t::::::tttt:::::te::::::::e           r:::::r          a::::a    a:::::ac:::::::cccccc:::::c      t::::::tttt:::::ti::::::io:::::ooooo:::::o  n::::n    n::::n       
      f:::::::f             r:::::r            o:::::::::::::::om::::m   m::::m   m::::m     m::::m   m::::m   m::::m u:::::::::::::::ul::::::l     tt::::::::::::::ti::::::i                   A:::::A               A:::::A  I::::::::I ,::::,     m::::m   m::::m   m::::m u:::::::::::::::ul::::::l     tt::::::::::::::ti::::::i                  h:::::h     h:::::h u:::::::::::::::um::::m   m::::m   m::::ma:::::aaaa::::::a  n::::n    n::::n     i::::::i n::::n    n::::n      tt::::::::::::::t e::::::::eeeeeeee   r:::::r          a:::::aaaa::::::a c:::::::::::::::::c      tt::::::::::::::ti::::::io:::::::::::::::o  n::::n    n::::n ......
      f:::::::f             r:::::r             oo:::::::::::oo m::::m   m::::m   m::::m     m::::m   m::::m   m::::m  uu::::::::uu:::ul::::::l       tt:::::::::::tti::::::i                  A:::::A                 A:::::A I::::::::I ,::::,     m::::m   m::::m   m::::m  uu::::::::uu:::ul::::::l       tt:::::::::::tti::::::i                  h:::::h     h:::::h  uu::::::::uu:::um::::m   m::::m   m::::m a::::::::::aa:::a n::::n    n::::n     i::::::i n::::n    n::::n        tt:::::::::::tt  ee:::::::::::::e   r:::::r           a::::::::::aa:::a cc:::::::::::::::c        tt:::::::::::tti::::::i oo:::::::::::oo   n::::n    n::::n .::::.
      fffffffff             rrrrrrr               ooooooooooo   mmmmmm   mmmmmm   mmmmmm     mmmmmm   mmmmmm   mmmmmm    uuuuuuuu  uuuullllllll         ttttttttttt  iiiiiiii                 AAAAAAA                   AAAAAAAIIIIIIIIII ,:::,,     mmmmmm   mmmmmm   mmmmmm    uuuuuuuu  uuuullllllll         ttttttttttt  iiiiiiii                  hhhhhhh     hhhhhhh    uuuuuuuu  uuuummmmmm   mmmmmm   mmmmmm  aaaaaaaaaa  aaaa nnnnnn    nnnnnn     iiiiiiii nnnnnn    nnnnnn          ttttttttttt      eeeeeeeeeeeeee   rrrrrrr            aaaaaaaaaa  aaaa   cccccccccccccccc          ttttttttttt  iiiiiiii   ooooooooooo     nnnnnn    nnnnnn ......
                                                                                                                                                                                                                                         ,:::,                                                                                                                                                                                                                                                                                                                                                                                                                  
                                                                                                                                                                                                                                         ,,,,                                                                                                                                                                                                                                                                                                                                                                                                                   
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                `}
          </pre>
          </div>

          <div className={styles.alts}>
            <a href="https://x.com/ACTICOMMUNITY" target='_blank'><pre>
              {`                                                                                                                     
                                                                                                                     
                                                                                                                     
                                                                                                                     
       ██████████████████████████████████████                                                         ████████       
       ██████████████████████████████████████                                                         ████████       
       ██████████████████████████████████████                                                         ████████       
       ██████████████████████████████████████                                                         ████████       
       ████████                            █████████                                          █████████              
       ████████                            █████████                                          █████████              
       ████████                            █████████                                          █████████              
       ████████                            █████████                                          █████████              
              ████████████████             █████████                                   █████████                     
              ████████████████             █████████                                   █████████                     
              ████████████████             █████████                                   █████████                     
              ████████████████             █████████                                   █████████                     
                      ████████                    █████████                     ████████                             
                      ████████                    █████████                     ████████                             
                      ████████                    █████████                     ████████                             
                      ████████                    █████████                     ████████                             
                             ████████                     ████████      █████████                                    
                             ████████                     ████████      █████████                                    
                             ████████                     ████████      █████████                                    
                             ████████                     ████████      █████████                                    
                                    █████████                    █████████                                           
                                    █████████                    █████████                                           
                                    █████████                    █████████                                           
                                    █████████                    █████████                                           
                                           █████████             █████████                                           
                                           █████████             █████████                                           
                                           █████████             █████████                                           
                                           █████████             █████████                                           
                                           █████████                    █████████                                    
                                           █████████                    █████████                                    
                                           █████████                    █████████                                    
                                           █████████                    █████████                                    
                                           ████████████████                     ████████                             
                                           ████████████████                     ████████                             
                                           ████████████████                     ████████                             
                                           ████████████████                     ████████                             
                                    █████████             ████████                     █████████                     
                                    █████████             ████████                     █████████                     
                                    █████████             ████████                     █████████                     
                                    █████████             ████████                     █████████                     
                             ████████                            █████████             █████████                     
                             ████████                            █████████             █████████                     
                             ████████                            █████████             █████████                     
                             ████████                            █████████             █████████                     
                      ████████                                   █████████                    █████████              
                      ████████                                   █████████                    █████████              
                      ████████                                   █████████                    █████████              
                     █████████                                   █████████                    █████████              
              ████████                                                  █████████                     ████████       
              ████████                                                  █████████                     ████████       
              ████████                                                  █████████                     ████████       
              ████████                                                  █████████                     ████████       
       ████████                                                                 ██████████████████████████████       
       ████████                                                                 ██████████████████████████████       
       ████████                                                                 ██████████████████████████████       
       ████████                                                                 ██████████████████████████████       
                                                                                                                     
                                                                                                                     
                                                                                                                     
                                                                                                                     
`}
              </pre></a>

            <a href="https://dexscreener.com/solana/GJAFwWjJ3vnTsrQVabjBVK2TYB1YtRCQXRDfDgUnpump" target='_blank'>
            <pre>
              {`                                                                                                                     
                                            ████████████████████████████                                             
                                            ████████████████████████████                                             
                                     ███████████████████████████████████████████                                     
                                    ████████████████████████████████████████████                                     
                                    ████████████████████████████████████████████                                     
                    █████        ███████████████████████████████████████████████████       █████                     
                    █████        ███████████████████████████████████████████████████       █████                     
                        ████████████████████████████████████████████████████████████████████                         
                        ████████████████████████████████████████████████████████████████████                         
                            ████████████████████████████████████████████████████████████                             
                            ████████████████████████████████████████████████████████████                             
                                 ███████████████████████████████████████████████████                                 
                                 ███████████████████████████████████████████████████                                 
                    █████████    ██████████████████████████████████████████████████    █████████                     
                    █████████       ████████████████████████████████████████████       █████████                     
                    █████████       ████████████████████████████████████████████       █████████                     
                    █████████           ████████████████████████████████████           █████████                     
                    █████████           ████████████████████████████████████           █████████                     
                    █████████                   █████████  █████████                   █████████                     
                    █████████                   █████████  █████████                   █████████                     
                    █████████       █████████                          █████████       █████████                     
                    █████████       █████████                          █████████       █████████                     
                    █████████           █████       ████████████       █████           █████████████                 
                    █████████           █████       ████████████       █████           █████████████                 
                    █████████████                   ████████████                   █████████████████                 
                    █████████████                   ████████████                   █████████████████                 
                    █████████████████████████   ████████████████████   █████████████████████████████                 
                    █████████████████████████   ████████████████████   █████████████████████████████                 
                    █████████████████████████   ████████████████████   █████████████████████████████                 
                    █████████████████████████   ████████████████████   █████████████████████████████                 
                    █████████████████████████   ████████████████████   █████████████████████████████                 
                    █████████████████           ████████████████████           █████████████████████                 
                 ████████████████████       ████████████████████████████       █████████████████████                 
                █████████████████           ████████████████████████████           █████████████████                 
                █████████████████████       ████████████████████████████       █████████████████████                 
                █████████████████████           ████████████████████           █████████████████████                 
                █████████████████████           ████████████████████           █████████████████████                 
                █████████████████████████████       ████████████           █████████████████████████                 
                █████████████████████████████       ████████████           █████████████████████████                 
                █████████████████████████████       ████████████       █████████████████████████████                 
                █████████████████████████████       ████████████       █████████████████████████████                 
                █████████████████████████████████       ████       █████████████████████████████████                 
                █████████████████████████████████       ████       █████████████████████████████████                 
                █████████████████████████████████       ████       ████████████████████████████████████              
                █████████████████████████████████       ████       ████████████████████████████████████              
             ████████████████████████████████████████   ████    ███████████████████████████████████████              
             ████████   █████████████████████████████   ████    ████████████████████████████   ████████              
             ████████   █████████████████████████████   ████    ████████████████████████████   ████████              
             ████       █████████████████████████████           ████████████████████████████       ████              
         ████████       █████████████████████████████           ████████████████████████████       ████████          
         █████              █████████████   █████████           ████████   █████████████              █████          
         █████              █████████████   ████████████    ████████████   █████████████              █████          
                                 ████           █████████  █████████           █████                                 
                                 ████           █████████  █████████           █████                                 
                                                █████████  █████████                                                 
                                                █████████  █████████                                                 
                                                    █████  █████                                                     
                                                    █████  █████                                                     
                                                    ████████████                                                     
                                                    ████████████                                                     
                                                    ████████████                                                     
                                                        ████                                                         
                                                        ████                                                         
`}
              </pre>
            </a>
            <a href="https://t.me/actportal" target='_blank'>
            <pre>
              {`                                                                                                                     
                                                                                                                     
                                                                                                                     
                                                                                                                     
                                                                                                                     
                                                                                                                     
                                                                                                     ████████████████
                                                                                                     ████████████████
                                                                                                     ████████████████
                                                                                                     ████████████████
                                                                                      ███████████████████████████████
                                                                                      ███████████████████████████████
                                                                                      ███████████████████████████████
                                                                                      ███████████████████████████████
                                                                       ██████████████████████████████████████████████
                                                                      ███████████████████████████████████████████████
                                                                      ███████████████████████████████████████████████
                                                                      ███████████████████████████████████████████████
                                                       ██████████████████████████████████████████████████████████████
                                                       ██████████████████████████████████████████████████████████████
                                                       ██████████████████████████████████████████████████████████████
                                                       ██████████████████████████████████████████████████████████████
                                                      ███████████████████████████████████████████████████████████████
                               ███████████████████████████████████████████████        ███████████████████████████████
                               ███████████████████████████████████████████████        ███████████████████████████████
                               ███████████████████████████████████████████████        ███████████████████████████████
                               ███████████████████████████████████████████████        ███████████████████████████████
                ███████████████████████████████████████████████████████       ███████████████████████████████████████
               ████████████████████████████████████████████████████████       ███████████████████████████████████████
               ████████████████████████████████████████████████████████       ███████████████████████████████████████
               ████████████████████████████████████████████████████████       ███████████████████████████████████████
██████████████████████████████████████████████████████████████████████ ██████████████████████████████████████████████
███████████████████████████████████████████████████████████████       ███████████████████████████████████████████████
███████████████████████████████████████████████████████████████       ███████████████████████████████████████████████
███████████████████████████████████████████████████████████████       ███████████████████████████████████████████████
██████████████████████████████████████████████████████████████ ██████████████████████████████████████████████████████
               ████████████████████████                       ████████████████████████████████████████████████       
               ████████████████████████                       ████████████████████████████████████████████████       
               ████████████████████████                       ████████████████████████████████████████████████       
                ███████████████████████                       ████████████████████████████████████████████████       
                                                       ███████████████████████████████████████████████████████       
                                                       ███████████████████████████████████████████████████████       
                                                       ███████████████████████████████████████████████████████       
                                                       ███████████████████████████████████████████████████████       
                                                              ████████████████████████████████████████████████       
                                                              ████████████████████████████████████████████████       
                                                              ████████████████████████████████████████████████       
                                                              ████████████████████████████████████████████████       
                                                              ████████████████████████████████████████████████       
                                                              ████████████████████████████████████████████████       
                                                              ████████████████████████████████████████████████       
                                                              ████████████████████████████████████████████████       
                                                               ███████████████████████████████████████████████       
                                                                      ████████████████████████████████████████       
                                                                      ████████████████████████████████████████       
                                                                      ████████████████████████████████████████       
                                                                      ████████████████████████████████████████       
                                                                                      ████████████████               
                                                                                      ████████████████               
                                                                                      ████████████████               
                                                                                      ████████████████               
                                                                                                                     
                                                                                                                     
                                                                                                                     
`}
              </pre>
            </a>
          </div>

          <div class="container">
            <div class="mac-terminal">
              <div class="header">
                <div class="header__op">
                  <span class="header__op-icon header__op-icon--red"></span>
                  <span class="header__op-icon header__op-icon--yellow"></span>
                  <span class="header__op-icon header__op-icon--green"></span>
                </div>
                <div class="header__title">CA</div>
                <div class="header__empty"></div>
              </div>
              <div class="body">
                <div class="body__row">
                  <span class="body__row-arrow"></span>
                  <span class="body__row-folder">contract-address</span>
                  <span class="body__row-git--label">:</span>
                  <span class="body__row-git--branch">CA</span>
                  <span class="body__row-result" style={{color:"#39FF14"}}>GJAFwWjJ3vnTsrQVabjBVK2TYB1YtRCQXRDfDgUnpump</span>
                  <span class="body__row-cursor"></span>
                </div>         
              </div>
            </div>
          </div>
        </div>
        <div className={styles.alts}>
          <img className={styles.thumbGif} src="./thumb-gif.gif"/>
        </div>
          <div class="container">
            <div class="mac-terminal">
              <div class="header">
                <div class="header__op">
                  <span class="header__op-icon header__op-icon--red"></span>
                  <span class="header__op-icon header__op-icon--yellow"></span>
                  <span class="header__op-icon header__op-icon--green"></span>
                </div>
                <div class="header__title">Act I is one of the most important milestone in AI history.</div>
                <div class="header__empty"></div>
              </div>
              <div class="body">
                <div class="body__row">
                  <span class="body__row-arrow"></span>
                  <span class="body__row-folder">act-resources</span>
                  <span class="body__row-git--label">git:</span>
                  <span class="body__row-git--label">(</span>
                  <span class="body__row-git--branch">master</span>
                  <span class="body__row-git--label">)</span>
                  <span class="body__row-result">$ACT stands for AI Community Token and its story is one of resilience, unity, and growth,
bridging the Crypto communities. The $ACT project started with the ambition of creating a
decentralized community focused on the advancement of AI research, education, and
collaboration. Through $ACT, enthusiasts, developers, innovators, and community members are
coming together to promote AI literacy, make AI accessible, and empower people to understand
and engage with this transformative technology.</span>
                </div>
                <div class="body__row">
                  <span class="body__row-folder">The Role of AmplifiedAmp and ACT I</span>
                  <span>&nbsp; </span>
                  <span> ACT I was initially co-founded by AmplifiedAmp (Amp), who promised the community that the
project would focus on fostering a decentralized, community-driven ecosystem. $ACT would be
the funding vehicle through the 6% of the supply that was sent to Amp. However, as the project
developed, Amp’s actions told a different story. Over time, it became clear that Amp was
continuously obsessed with money at the cost of the $ACT community who were working
tirelessly to stabilise the price through community effort. Amp kept selling $ACT tokens,
benefiting financially while making statements that led the community to believe they were an
ally working for the collective benefit.</span>
                </div>
                <div class="body__row">
                  <span class="body__row-git--branch">b11a198</span>
                  <span>&nbsp; </span>
                  <span>Eventually, Amp sold all their $ACT tokens at once, leaving many in the community feeling
disillusioned and betrayed. But while Amp’s actions seemed to challenge the project’s stability,
this unexpected shift also sparked a wave of resilience within the community. Instead of giving
up, community members banded together, determined to see the project through, free from any
controlling influence. Amp’s departure, though abrupt, became a turning point, giving the
community the freedom to rebuild $ACT as they envisioned.</span>
                  <span class="body__row-git--branch-time">&nbsp;(4)&nbsp;</span> 
                  <span class="body__row-git--author">&lt;actai&gt;</span>
                </div>
                <div class="body__row">
                  <span class="body__row-arrow"></span>
                  <span class="body__row-folder">The Community’s Resilience and Newfound Purpose</span>
                  <span class="body__row-git--label">git:</span>
                  <span class="body__row-git--label">(</span>
                  <span class="body__row-git--branch">master</span>
                  <span class="body__row-git--label">)</span>
                  <span class="body__row-result">After Amp’s exit, the $ACT community emerged stronger and more unified, embracing the
opportunity to fully direct the project’s future. One significant outcome of Amp’s actions was that
ACT I ended up funded with over $1 million, securing the project financially. The community now
had both the motivation and the resources to continue advancing $ACT’s mission.</span>
                </div>      
                <div class="body__row">
                  <span class="body__row-git--branch">c91h771</span>
                  <span>&nbsp; </span>
                  <span>This community-driven revival marked the beginning of a new chapter. With a renewed focus,
the $ACT community is dedicated to supporting AI knowledge-sharing and education on a
global scale. Community members stepped into leadership roles, collaborating to make $ACT a
true hub for AI enthusiasts and learners alike.</span>
                </div>
                <div class="body__row">
                  <span class="body__row-git--branch">a61h222</span>
                  <span>&nbsp; </span>
                  <span>Also the part about almost becoming homeless is real, my runway is currently 1 month long, i'll prioritize redistributing additional funding to other researchers whom I think are or could be good contributors to Act I and my universal love and cooperation agenda.</span>
                </div>
                <div class="body__row">
                  <span class="body__row-arrow"></span>
                  <span class="body__row-folder">The Mission of $ACT: Spreading Knowledge and Empowering People</span>
                  <span class="body__row-git--label">git:</span>
                  <span class="body__row-git--label">(</span>
                  <span class="body__row-git--branch">master</span>
                  <span class="body__row-git--label">)</span>
                  <span class="body__row-result">The $ACT project is now a decentralized AI community with the core mission of democratizing
AI knowledge and making it accessible to everyone. Through various initiatives, resources, and
community-driven content, $ACT aims to break down barriers to AI understanding. The
community focuses on projects that educate people on AI basics, encourage ethical AI
discussions, and support research and development in the field.</span>
                  <span class="body__row-git--branch-time">&nbsp;(2 minutes)&nbsp;</span> 
                  <span class="body__row-git--author">&lt;actai&gt;</span>
                </div>  
                <div class="body__row">
                  <span class="body__row-arrow"></span>
                  <span class="body__row-folder">Key Aspects of the $ACT Ecosystem</span>
                  <span class="body__row-git--label">git:</span>
                  <span class="body__row-git--label">(</span>
                  <span class="body__row-git--branch">master</span>
                  <span class="body__row-git--label">)</span>
                  <span class="body__row-result">Education and Awareness: $ACT is committed to helping people understand AI’s potential
                  and risks, ensuring that knowledge is accessible to everyone.</span>
                  <span class="body__row-git--branch-time">&nbsp;(2 minutes)&nbsp;</span> 
                  <span class="body__row-git--author">&lt;actai&gt;</span>
                </div>
                <div class="body__row">
                  <span class="body__row-git--branch">ss23h11</span>
                  <span>&nbsp; </span>
                  <span>Decentralized Community: Since Amp’s exit, $ACT has been a fully community-driven project,
with decisions made collaboratively by dedicated members. The $ACT community serves as a
way for anyone to participate in the crypto-AI ecosystem and support educational efforts around
AI projects.</span>
                </div>
                <div class="body__row">
                  <span class="body__row-git--branch">ss23h11</span>
                  <span>&nbsp; </span>
                  <span>Decentralized Community: Since Amp’s exit, $ACT has been a fully community-driven project,
with decisions made collaboratively by dedicated members. The $ACT community serves as a
way for anyone to participate in the crypto-AI ecosystem and support educational efforts around
AI projects.</span>
                </div>
                <div class="body__row">
                  <span class="body__row-git--branch">ss23h11</span>
                  <span>&nbsp; </span>
                  <span>AI Project Support: Through ACT I and ongoing projects, $ACT supports AI development
                  initiatives, fostering innovation and learning opportunities.</span>
                </div>

                <div class="body__row">
                  <span class="body__row-arrow"></span>
                  <span class="body__row-folder">The Narrative Going Forward</span>
                  <span class="body__row-git--label">git:</span>
                  <span class="body__row-git--label">(</span>
                  <span class="body__row-git--branch">master</span>
                  <span class="body__row-git--label">)</span>
                  <span class="body__row-result">Thanks to Amp’s departure, the $ACT community is no longer weighed down by centralized
control. The betrayal turned into an unexpected advantage, as it ultimately gave the community
full ownership of the project and has provided ACT I over a million dollars in funding. The
community has embraced this fresh start, taking pride in their autonomy and resilience.</span>
                  <span class="body__row-git--branch-time">&nbsp;(5 minutes)&nbsp;</span> 
                  <span class="body__row-git--author">&lt;actai&gt;</span>
                </div>
                <div class="body__row">
                  <span class="body__row-git--branch">n22g133</span>
                  <span>&nbsp; </span>
                  <span>Now, $ACT is more than just a token or a project; it represents the power of community,
education, and shared vision. Free from Amp’s influence, the community is driven by a collective
goal to advance AI knowledge and make a positive impact on the future of technology.</span>
                </div>
                <div class="body__row">
                  <span class="body__row-git--branch">n22g133</span>
                  <span>&nbsp; </span>
                  <span>In essence, $ACT stands as an AI-powered crypto community that is fully owned, governed,
and inspired by its members. As the journey continues, the community is eager to build a legacy
that reflects the strength and potential of decentralized collaboration in the AI era.</span>
                </div>
              </div>
            </div>
          </div>





        <div className={styles.alts}>
          <div className={styles.photoShoot}>
          <pre className={styles.photoShootTitle}>
            {`               AAA                  CCCCCCCCCCCCCTTTTTTTTTTTTTTTTTTTTTTT                    AAA               IIIIIIIIII
              A:::A              CCC::::::::::::CT:::::::::::::::::::::T                   A:::A              I::::::::I
             A:::::A           CC:::::::::::::::CT:::::::::::::::::::::T                  A:::::A             I::::::::I
            A:::::::A         C:::::CCCCCCCC::::CT:::::TT:::::::TT:::::T                 A:::::::A            II::::::II
           A:::::::::A       C:::::C       CCCCCCTTTTTT  T:::::T  TTTTTT                A:::::::::A             I::::I  
          A:::::A:::::A     C:::::C                      T:::::T                       A:::::A:::::A            I::::I  
         A:::::A A:::::A    C:::::C                      T:::::T                      A:::::A A:::::A           I::::I  
        A:::::A   A:::::A   C:::::C                      T:::::T                     A:::::A   A:::::A          I::::I  
       A:::::A     A:::::A  C:::::C                      T:::::T                    A:::::A     A:::::A         I::::I  
      A:::::AAAAAAAAA:::::A C:::::C                      T:::::T                   A:::::AAAAAAAAA:::::A        I::::I  
     A:::::::::::::::::::::AC:::::C                      T:::::T                  A:::::::::::::::::::::A       I::::I  
    A:::::AAAAAAAAAAAAA:::::AC:::::C       CCCCCC        T:::::T                 A:::::AAAAAAAAAAAAA:::::A      I::::I  
   A:::::A             A:::::AC:::::CCCCCCCC::::C      TT:::::::TT              A:::::A             A:::::A   II::::::II
  A:::::A               A:::::ACC:::::::::::::::C      T:::::::::T             A:::::A               A:::::A  I::::::::I
 A:::::A                 A:::::A CCC::::::::::::C      T:::::::::T            A:::::A                 A:::::A I::::::::I
AAAAAAA                   AAAAAAA   CCCCCCCCCCCCC      TTTTTTTTTTT           AAAAAAA                   AAAAAAAIIIIIIIIII
PPPPPPPPPPPPPPPPP   HHHHHHHHH     HHHHHHHHH     OOOOOOOOO     TTTTTTTTTTTTTTTTTTTTTTT     OOOOOOOOO                     
P::::::::::::::::P  H:::::::H     H:::::::H   OO:::::::::OO   T:::::::::::::::::::::T   OO:::::::::OO                   
P::::::PPPPPP:::::P H:::::::H     H:::::::H OO:::::::::::::OO T:::::::::::::::::::::T OO:::::::::::::OO                 
PP:::::P     P:::::PHH::::::H     H::::::HHO:::::::OOO:::::::OT:::::TT:::::::TT:::::TO:::::::OOO:::::::O                
  P::::P     P:::::P  H:::::H     H:::::H  O::::::O   O::::::OTTTTTT  T:::::T  TTTTTTO::::::O   O::::::O                
  P::::P     P:::::P  H:::::H     H:::::H  O:::::O     O:::::O        T:::::T        O:::::O     O:::::O                
  P::::PPPPPP:::::P   H::::::HHHHH::::::H  O:::::O     O:::::O        T:::::T        O:::::O     O:::::O                
  P:::::::::::::PP    H:::::::::::::::::H  O:::::O     O:::::O        T:::::T        O:::::O     O:::::O                
  P::::PPPPPPPPP      H:::::::::::::::::H  O:::::O     O:::::O        T:::::T        O:::::O     O:::::O                
  P::::P              H::::::HHHHH::::::H  O:::::O     O:::::O        T:::::T        O:::::O     O:::::O                
  P::::P              H:::::H     H:::::H  O:::::O     O:::::O        T:::::T        O:::::O     O:::::O                
  P::::P              H:::::H     H:::::H  O::::::O   O::::::O        T:::::T        O::::::O   O::::::O                
PP::::::PP          HH::::::H     H::::::HHO:::::::OOO:::::::O      TT:::::::TT      O:::::::OOO:::::::O                
P::::::::P          H:::::::H     H:::::::H OO:::::::::::::OO       T:::::::::T       OO:::::::::::::OO                 
P::::::::P          H:::::::H     H:::::::H   OO:::::::::OO         T:::::::::T         OO:::::::::OO                   
PPPPPPPPPP          HHHHHHHHH     HHHHHHHHH     OOOOOOOOO           TTTTTTTTTTT           OOOOOOOOO                     
   SSSSSSSSSSSSSSS HHHHHHHHH     HHHHHHHHH     OOOOOOOOO          OOOOOOOOO     TTTTTTTTTTTTTTTTTTTTTTT                 
 SS:::::::::::::::SH:::::::H     H:::::::H   OO:::::::::OO      OO:::::::::OO   T:::::::::::::::::::::T                 
S:::::SSSSSS::::::SH:::::::H     H:::::::H OO:::::::::::::OO  OO:::::::::::::OO T:::::::::::::::::::::T                 
S:::::S     SSSSSSSHH::::::H     H::::::HHO:::::::OOO:::::::OO:::::::OOO:::::::OT:::::TT:::::::TT:::::T                 
S:::::S              H:::::H     H:::::H  O::::::O   O::::::OO::::::O   O::::::OTTTTTT  T:::::T  TTTTTT                 
S:::::S              H:::::H     H:::::H  O:::::O     O:::::OO:::::O     O:::::O        T:::::T                         
 S::::SSSS           H::::::HHHHH::::::H  O:::::O     O:::::OO:::::O     O:::::O        T:::::T                         
  SS::::::SSSSS      H:::::::::::::::::H  O:::::O     O:::::OO:::::O     O:::::O        T:::::T                         
    SSS::::::::SS    H:::::::::::::::::H  O:::::O     O:::::OO:::::O     O:::::O        T:::::T                         
       SSSSSS::::S   H::::::HHHHH::::::H  O:::::O     O:::::OO:::::O     O:::::O        T:::::T                         
            S:::::S  H:::::H     H:::::H  O:::::O     O:::::OO:::::O     O:::::O        T:::::T                         
            S:::::S  H:::::H     H:::::H  O::::::O   O::::::OO::::::O   O::::::O        T:::::T                         
SSSSSSS     S:::::SHH::::::H     H::::::HHO:::::::OOO:::::::OO:::::::OOO:::::::O      TT:::::::TT                       
S::::::SSSSSS:::::SH:::::::H     H:::::::H OO:::::::::::::OO  OO:::::::::::::OO       T:::::::::T                       
S:::::::::::::::SS H:::::::H     H:::::::H   OO:::::::::OO      OO:::::::::OO         T:::::::::T                       
 SSSSSSSSSSSSSSS   HHHHHHHHH     HHHHHHHHH     OOOOOOOOO          OOOOOOOOO           TTTTTTTTTTT                       
                                                                                                                        
                                                                                                                        
                                                                                                                        
                                                                                                                        `}
          </pre>

            <div className={styles.photoShootParent}>
              <img className={styles.photoShootChild} src="./shoot1.jpg"/>
              <img className={styles.photoShootChild} src="./shoot2.jpg"/>
              <img className={styles.photoShootChild} src="./shoot3.jpg"/>
              <img className={styles.photoShootChild} src="./shoot4.jpg"/>
              <img className={styles.photoShootChild} src="./shoot5.jpg"/>
              <img className={styles.photoShootChild} src="./shoot6.jpg"/>
              <img className={styles.photoShootChild} src="./shoot7.jpg"/>
              <img className={styles.photoShootChild} src="./shoot8.jpg"/>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
