import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { useLayoutEffect } from 'react'

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

        ctx.fillStyle = "#be42f4"; 
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
      
<pre className={styles.ascii}>
  {`
REM __| |_______________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________| |__
REM __   _______________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________   __
REM   | |                                                                                                                                                                                                                                                                                                                                                                                       | |  
REM   | |                 AAA                                       tttt               IIIIIIIIII                  TTTTTTTTTTTTTTTTTTTTTThhhhhhh                                                    AAA              IIIIIIIIII     PPPPPPPPPPPPPPPPP                                                       hhhhhhh                                                                             | |  
REM   | |                A:::A                                   ttt:::t               I::::::::I                  T:::::::::::::::::::::h:::::h                                                   A:::A             I::::::::I     P::::::::::::::::P                                                      h:::::h                                                                             | |  
REM   | |               A:::::A                                  t:::::t               I::::::::I                  T:::::::::::::::::::::h:::::h                                                  A:::::A            I::::::::I     P::::::PPPPPP:::::P                                                     h:::::h                                                                             | |  
REM   | |              A:::::::A                                 t:::::t               II::::::II                  T:::::TT:::::::TT:::::h:::::h                                                 A:::::::A           II::::::II     PP:::::P     P:::::P                                                    h:::::h                                                                             | |  
REM   | |             A:::::::::A           cccccccccccccccttttttt:::::ttttttt           I::::I                    TTTTTT  T:::::T  TTTTTTh::::h hhhhh          eeeeeeeeeeee                    A:::::::::A            I::::I         P::::P     P:::::rrrrr   rrrrrrrrr     ooooooooooo  ppppp   ppppppppp  h::::h hhhhh          eeeeeeeeeeee       cccccccccccccccyyyyyyy           yyyyyyy  | |  
REM   | |            A:::::A:::::A        cc:::::::::::::::t:::::::::::::::::t           I::::I        ::::::              T:::::T        h::::hh:::::hhh     ee::::::::::::ee                 A:::::A:::::A           I::::I         P::::P     P:::::r::::rrr:::::::::r  oo:::::::::::oop::::ppp:::::::::p h::::hh:::::hhh     ee::::::::::::ee   cc:::::::::::::::cy:::::y         y:::::y   | |  
REM   | |           A:::::A A:::::A      c:::::::::::::::::t:::::::::::::::::t           I::::I        ::::::              T:::::T        h::::::::::::::hh  e::::::eeeee:::::ee              A:::::A A:::::A          I::::I         P::::PPPPPP:::::Pr:::::::::::::::::ro:::::::::::::::p:::::::::::::::::ph::::::::::::::hh  e::::::eeeee:::::eec:::::::::::::::::c y:::::y       y:::::y    | |  
REM   | |          A:::::A   A:::::A    c:::::::cccccc:::::tttttt:::::::tttttt           I::::I        ::::::              T:::::T        h:::::::hhh::::::he::::::e     e:::::e             A:::::A   A:::::A         I::::I         P:::::::::::::PP rr::::::rrrrr::::::o:::::ooooo:::::pp::::::ppppp::::::h:::::::hhh::::::he::::::e     e:::::c:::::::cccccc:::::c  y:::::y     y:::::y     | |  
REM   | |         A:::::A     A:::::A   c::::::c     ccccccc     t:::::t                 I::::I                            T:::::T        h::::::h   h::::::e:::::::eeeee::::::e            A:::::A     A:::::A        I::::I         P::::PPPPPPPPP    r:::::r     r:::::o::::o     o::::op:::::p     p:::::h::::::h   h::::::e:::::::eeeee::::::c::::::c     ccccccc   y:::::y   y:::::y      | |  
REM   | |        A:::::AAAAAAAAA:::::A  c:::::c                  t:::::t                 I::::I                            T:::::T        h:::::h     h:::::e:::::::::::::::::e            A:::::AAAAAAAAA:::::A       I::::I         P::::P            r:::::r     rrrrrro::::o     o::::op:::::p     p:::::h:::::h     h:::::e:::::::::::::::::ec:::::c                 y:::::y y:::::y       | |  
REM   | |       A:::::::::::::::::::::A c:::::c                  t:::::t                 I::::I                            T:::::T        h:::::h     h:::::e::::::eeeeeeeeeee            A:::::::::::::::::::::A      I::::I         P::::P            r:::::r           o::::o     o::::op:::::p     p:::::h:::::h     h:::::e::::::eeeeeeeeeee c:::::c                  y:::::y:::::y        | |  
REM   | |      A:::::AAAAAAAAAAAAA:::::Ac::::::c     ccccccc     t:::::t    tttttt       I::::I        ::::::              T:::::T        h:::::h     h:::::e:::::::e                    A:::::AAAAAAAAAAAAA:::::A     I::::I         P::::P            r:::::r           o::::o     o::::op:::::p    p::::::h:::::h     h:::::e:::::::e          c::::::c     ccccccc      y:::::::::y         | |  
REM   | |     A:::::A             A:::::c:::::::cccccc:::::c     t::::::tttt:::::t     II::::::II      ::::::            TT:::::::TT      h:::::h     h:::::e::::::::e                  A:::::A             A:::::A  II::::::II     PP::::::PP          r:::::r           o:::::ooooo:::::op:::::ppppp:::::::h:::::h     h:::::e::::::::e         c:::::::cccccc:::::c       y:::::::y          | |  
REM   | |    A:::::A               A:::::c:::::::::::::::::c     tt::::::::::::::t     I::::::::I      ::::::            T:::::::::T      h:::::h     h:::::he::::::::eeeeeeee         A:::::A               A:::::A I::::::::I     P::::::::P          r:::::r           o:::::::::::::::op::::::::::::::::ph:::::h     h:::::he::::::::eeeeeeee  c:::::::::::::::::c        y:::::y           | |  
REM   | |   A:::::A                 A:::::cc:::::::::::::::c       tt:::::::::::tt     I::::::::I                        T:::::::::T      h:::::h     h:::::h ee:::::::::::::e        A:::::A                 A:::::AI::::::::I     P::::::::P          r:::::r            oo:::::::::::oo p::::::::::::::pp h:::::h     h:::::h ee:::::::::::::e   cc:::::::::::::::c       y:::::y            | |  
REM   | |  AAAAAAA                   AAAAAAAcccccccccccccccc         ttttttttttt       IIIIIIIIII                        TTTTTTTTTTT      hhhhhhh     hhhhhhh   eeeeeeeeeeeeee       AAAAAAA                   AAAAAAIIIIIIIIII     PPPPPPPPPP          rrrrrrr              ooooooooooo   p::::::pppppppp   hhhhhhh     hhhhhhh   eeeeeeeeeeeeee     cccccccccccccccc      y:::::y             | |  
REM   | |                                                                                                                                                                                                                                                                                  p:::::p                                                                         y:::::y              | |  
REM   | |                                                                                                                                                                                                                                                                                  p:::::p                                                                        y:::::y               | |  
REM   | |                                                                                                                                                                                                                                                                                 p:::::::p                                                                      y:::::y                | |  
REM   | |                                                                                                                                                                                                                                                                                 p:::::::p                                                                     y:::::y                 | |  
REM   | |                                                                                                                                                                                                                                                                                 p:::::::p                                                                    yyyyyyy                  | |  
REM   | |                                                                                                                                                                                                                                                                                 ppppppppp                                                                                             | |  
REM __| |_______________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________| |__
REM __   _______________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________   __
REM   | |                                                                                                                                                                                                                                                                                                                                                                                       | |  `}
</pre>

      <main className={styles.main}>
        
        <div className={styles.infos}>
        <div className={styles.pfps}>
          <img className={styles.act} src="./pfp.gif"/>
          {/* <img className={styles.act} src="./pfp-blue.gif"/> */}
        </div>

          {/* <p className={styles.title}>ACT</p> */}
          <canvas id="c" width="2300" height="750"></canvas>  
          <div className={styles.infoTop}>
          <pre>
            {`REM __| |_________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________| |__
REM __   _________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________   __
REM   | |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | |  
REM   | |                                                                                                                                                                                                                                                                                                                                                                                                                                 bbbbbbbb                                                                                                                                                                                                                        | |  
REM   | |                 AAA                                       tttt               IIIIIIIIII                  EEEEEEEEEEEEEEEEEEEEEE                                     lllllll                                    iiii                                                                                                                                                                                          tttt               b::::::b                             hhhhhhh                                                    iiii                                              ffffffffffffffff                                                              | |  
REM   | |                A:::A                                   ttt:::t               I::::::::I                  E::::::::::::::::::::E                                     l:::::l                                   i::::i                                                                                                                                                                                      ttt:::t               b::::::b                             h:::::h                                                   i::::i                                            f::::::::::::::::f                                                             | |  
REM   | |               A:::::A                                  t:::::t               I::::::::I                  E::::::::::::::::::::E                                     l:::::l                                    iiii                                                                                                                                                                                       t:::::t               b::::::b                             h:::::h                                                    iiii                                            f::::::::::::::::::f                                                            | |  
REM   | |              A:::::::A                                 t:::::t               II::::::II                  EE::::::EEEEEEEEE::::E                                     l:::::l                                                                                                                                                                                                                               t:::::t                b:::::b                             h:::::h                                                                                                    f::::::fffffff:::::f                                                            | |  
REM   | |             A:::::::::A           cccccccccccccccttttttt:::::ttttttt           I::::I                      E:::::E       EEEEExxxxxxx      xxxxxxppppp   ppppppppp   l::::l   ooooooooooo  rrrrr   rrrrrrrrr iiiiiinnnn  nnnnnnnn      ggggggggg   ggggg         eeeeeeeeeeee      mmmmmmm    mmmmmmm      eeeeeeeeeeee   rrrrr   rrrrrrrrr     ggggggggg   ggggg   eeeeeeeeeeee   nnnn  nnnnnnnn   ttttttt:::::ttttttt          b:::::bbbbbbbbb       eeeeeeeeeeee   h::::h hhhhh        aaaaaaaaaaaavvvvvvv           vvvvvviiiiiii   ooooooooooo  rrrrr   rrrrrrrrr          f:::::f       fffffrrrrr   rrrrrrrrr     ooooooooooo     mmmmmmm    mmmmmmm     | |  
REM   | |            A:::::A:::::A        cc:::::::::::::::t:::::::::::::::::t           I::::I        ::::::        E:::::E             x:::::x    x:::::xp::::ppp:::::::::p  l::::l oo:::::::::::oor::::rrr:::::::::ri:::::n:::nn::::::::nn   g:::::::::ggg::::g       ee::::::::::::ee  mm:::::::m  m:::::::mm  ee::::::::::::ee r::::rrr:::::::::r   g:::::::::ggg::::g ee::::::::::::ee n:::nn::::::::nn t:::::::::::::::::t          b::::::::::::::bb   ee::::::::::::ee h::::hh:::::hhh     a::::::::::::v:::::v         v:::::vi:::::i oo:::::::::::oor::::rrr:::::::::r         f:::::f            r::::rrr:::::::::r  oo:::::::::::oo mm:::::::m  m:::::::mm   | |  
REM   | |           A:::::A A:::::A      c:::::::::::::::::t:::::::::::::::::t           I::::I        ::::::        E::::::EEEEEEEEEE    x:::::x  x:::::x p:::::::::::::::::p l::::lo:::::::::::::::r:::::::::::::::::ri::::n::::::::::::::nn g:::::::::::::::::g      e::::::eeeee:::::em::::::::::mm::::::::::me::::::eeeee:::::er:::::::::::::::::r g:::::::::::::::::ge::::::eeeee:::::en::::::::::::::nnt:::::::::::::::::t          b::::::::::::::::b e::::::eeeee:::::eh::::::::::::::hh   aaaaaaaaa:::::v:::::v       v:::::v  i::::io:::::::::::::::r:::::::::::::::::r       f:::::::ffffff      r:::::::::::::::::ro:::::::::::::::m::::::::::mm::::::::::m  | |  
REM   | |          A:::::A   A:::::A    c:::::::cccccc:::::tttttt:::::::tttttt           I::::I        ::::::        E:::::::::::::::E     x:::::xx:::::x  pp::::::ppppp::::::pl::::lo:::::ooooo:::::rr::::::rrrrr::::::i::::nn:::::::::::::::g::::::ggggg::::::gg     e::::::e     e:::::m::::::::::::::::::::::e::::::e     e:::::rr::::::rrrrr::::::g::::::ggggg::::::ge::::::e     e:::::nn:::::::::::::::tttttt:::::::tttttt          b:::::bbbbb:::::::e::::::e     e:::::h:::::::hhh::::::h           a::::av:::::v     v:::::v   i::::io:::::ooooo:::::rr::::::rrrrr::::::r      f::::::::::::f      rr::::::rrrrr::::::o:::::ooooo:::::m::::::::::::::::::::::m  | |  
REM   | |         A:::::A     A:::::A   c::::::c     ccccccc     t:::::t                 I::::I                      E:::::::::::::::E      x::::::::::x    p:::::p     p:::::pl::::lo::::o     o::::or:::::r     r:::::i::::i n:::::nnnn:::::g:::::g     g:::::g      e:::::::eeeee::::::m:::::mmm::::::mmm:::::e:::::::eeeee::::::er:::::r     r:::::g:::::g     g:::::ge:::::::eeeee::::::e n:::::nnnn:::::n     t:::::t                b:::::b    b::::::e:::::::eeeee::::::h::::::h   h::::::h   aaaaaaa:::::a v:::::v   v:::::v    i::::io::::o     o::::or:::::r     r:::::r      f::::::::::::f       r:::::r     r:::::o::::o     o::::m:::::mmm::::::mmm:::::m  | |  
REM   | |        A:::::AAAAAAAAA:::::A  c:::::c                  t:::::t                 I::::I                      E::::::EEEEEEEEEE       x::::::::x     p:::::p     p:::::pl::::lo::::o     o::::or:::::r     rrrrrri::::i n::::n    n::::g:::::g     g:::::g      e:::::::::::::::::em::::m   m::::m   m::::e:::::::::::::::::e r:::::r     rrrrrrg:::::g     g:::::ge:::::::::::::::::e  n::::n    n::::n     t:::::t                b:::::b     b:::::e:::::::::::::::::eh:::::h     h:::::h aa::::::::::::a  v:::::v v:::::v     i::::io::::o     o::::or:::::r     rrrrrrr      f:::::::ffffff       r:::::r     rrrrrro::::o     o::::m::::m   m::::m   m::::m  | |  
REM   | |       A:::::::::::::::::::::A c:::::c                  t:::::t                 I::::I                      E:::::E                 x::::::::x     p:::::p     p:::::pl::::lo::::o     o::::or:::::r           i::::i n::::n    n::::g:::::g     g:::::g      e::::::eeeeeeeeeee m::::m   m::::m   m::::e::::::eeeeeeeeeee  r:::::r           g:::::g     g:::::ge::::::eeeeeeeeeee   n::::n    n::::n     t:::::t                b:::::b     b:::::e::::::eeeeeeeeeee h:::::h     h:::::ha::::aaaa::::::a   v:::::v:::::v      i::::io::::o     o::::or:::::r                   f:::::f             r:::::r           o::::o     o::::m::::m   m::::m   m::::m  | |  
REM   | |      A:::::AAAAAAAAAAAAA:::::Ac::::::c     ccccccc     t:::::t    tttttt       I::::I        ::::::        E:::::E       EEEEEE   x::::::::::x    p:::::p    p::::::pl::::lo::::o     o::::or:::::r           i::::i n::::n    n::::g::::::g    g:::::g      e:::::::e          m::::m   m::::m   m::::e:::::::e           r:::::r           g::::::g    g:::::ge:::::::e            n::::n    n::::n     t:::::t    tttttt      b:::::b     b:::::e:::::::e          h:::::h     h:::::a::::a    a:::::a    v:::::::::v       i::::io::::o     o::::or:::::r                   f:::::f             r:::::r           o::::o     o::::m::::m   m::::m   m::::m  | |  
REM   | |     A:::::A             A:::::c:::::::cccccc:::::c     t::::::tttt:::::t     II::::::II      ::::::      EE::::::EEEEEEEE:::::E  x:::::xx:::::x   p:::::ppppp:::::::l::::::o:::::ooooo:::::or:::::r          i::::::in::::n    n::::g:::::::ggggg:::::g      e::::::::e         m::::m   m::::m   m::::e::::::::e          r:::::r           g:::::::ggggg:::::ge::::::::e           n::::n    n::::n     t::::::tttt:::::t      b:::::bbbbbb::::::e::::::::e         h:::::h     h:::::a::::a    a:::::a     v:::::::v       i::::::o:::::ooooo:::::or:::::r                  f:::::::f            r:::::r           o:::::ooooo:::::m::::m   m::::m   m::::m  | |  
REM   | |    A:::::A               A:::::c:::::::::::::::::c     tt::::::::::::::t     I::::::::I      ::::::      E::::::::::::::::::::E x:::::x  x:::::x  p::::::::::::::::pl::::::o:::::::::::::::or:::::r          i::::::in::::n    n::::ng::::::::::::::::g       e::::::::eeeeeeee m::::m   m::::m   m::::me::::::::eeeeeeee  r:::::r            g::::::::::::::::g e::::::::eeeeeeee   n::::n    n::::n     tt::::::::::::::t      b::::::::::::::::b e::::::::eeeeeeee h:::::h     h:::::a:::::aaaa::::::a      v:::::v        i::::::o:::::::::::::::or:::::r                  f:::::::f            r:::::r           o:::::::::::::::m::::m   m::::m   m::::m  | |  
REM   | |   A:::::A                 A:::::cc:::::::::::::::c       tt:::::::::::tt     I::::::::I                  E::::::::::::::::::::Ex:::::x    x:::::x p::::::::::::::pp l::::::loo:::::::::::oo r:::::r          i::::::in::::n    n::::n gg::::::::::::::g        ee:::::::::::::e m::::m   m::::m   m::::m ee:::::::::::::e  r:::::r             gg::::::::::::::g  ee:::::::::::::e   n::::n    n::::n       tt:::::::::::tt      b:::::::::::::::b   ee:::::::::::::e h:::::h     h:::::ha::::::::::aa:::a      v:::v         i::::::ioo:::::::::::oo r:::::r                  f:::::::f            r:::::r            oo:::::::::::oom::::m   m::::m   m::::m  | |  
REM   | |  AAAAAAA                   AAAAAAAcccccccccccccccc         ttttttttttt       IIIIIIIIII                  EEEEEEEEEEEEEEEEEEEEExxxxxxx      xxxxxxxp::::::pppppppp   llllllll  ooooooooooo   rrrrrrr          iiiiiiiinnnnnn    nnnnnn   gggggggg::::::g          eeeeeeeeeeeeee mmmmmm   mmmmmm   mmmmmm   eeeeeeeeeeeeee  rrrrrrr               gggggggg::::::g    eeeeeeeeeeeeee   nnnnnn    nnnnnn         ttttttttttt        bbbbbbbbbbbbbbbb      eeeeeeeeeeeeee hhhhhhh     hhhhhhh aaaaaaaaaa  aaaa       vvv          iiiiiiii  ooooooooooo   rrrrrrr                  fffffffff            rrrrrrr              ooooooooooo  mmmmmm   mmmmmm   mmmmmm  | |  
REM   | |                                                                                                                                                   p:::::p                                                                                       g:::::g                                                                                                  g:::::g                                                                                                                                                                                                                                                                                                | |  
REM   | |                                                                                                                                                   p:::::p                                                                           gggggg      g:::::g                                                                                      gggggg      g:::::g                                                                                                                                                                                                                                                                                                | |  
REM   | |                                                                                                                                                  p:::::::p                                                                          g:::::gg   gg:::::g                                                                                      g:::::gg   gg:::::g                                                                                                                                                                                                                                                                                                | |  
REM   | |                                                                                                                                                  p:::::::p                                                                           g::::::ggg:::::::g                                                                                       g::::::ggg:::::::g                                                                                                                                                                                                                                                                                                | |  
REM   | |                                                                                                                                                  p:::::::p                                                                            gg:::::::::::::g                                                                                         gg:::::::::::::g                                                                                                                                                                                                                                                                                                 | |  
REM   | |                                                                                                                                                  ppppppppp                                                                              ggg::::::ggg                                                                                             ggg::::::ggg                                                                                                                                                                                                                                                                                                   | |  
REM   | |                                                                                                                                                                                                                                            gggggg                                                                                                   gggggg                                                                                                                                                                                                                                                                                                      | |  
REM   | |                                          lllllll        tttt           iiii                                  AAA              IIIIIIIIII                                                    lllllll        tttt           iiii                   hhhhhhh                                                                                             iiii                          tttt                                                                                         tttt           iiii                                                                                                                                                             | |  
REM   | |                                          l:::::l     ttt:::t          i::::i                                A:::A             I::::::::I                                                    l:::::l     ttt:::t          i::::i                  h:::::h                                                                                            i::::i                      ttt:::t                                                                                      ttt:::t          i::::i                                                                                                                                                            | |  
REM   | |                                          l:::::l     t:::::t           iiii                                A:::::A            I::::::::I                                                    l:::::l     t:::::t           iiii                   h:::::h                                                                                             iiii                       t:::::t                                                                                      t:::::t           iiii                                                                                                                                                             | |  
REM   | |                                          l:::::l     t:::::t                                              A:::::::A           II::::::II                                                    l:::::l     t:::::t                                  h:::::h                                                                                                                        t:::::t                                                                                      t:::::t                                                                                                                                                                            | |  
REM   | |     mmmmmmm    mmmmmmm  uuuuuu    uuuuuu  l::::ttttttt:::::ttttttt   iiiiiii                             A:::::::::A            I::::I                 mmmmmmm    mmmmmmm  uuuuuu    uuuuuu  l::::ttttttt:::::ttttttt   iiiiiii                   h::::h hhhhh      uuuuuu    uuuuuu    mmmmmmm    mmmmmmm    aaaaaaaaaaaaa nnnn  nnnnnnnn         iiiiiinnnn  nnnnnnnn   ttttttt:::::ttttttt       eeeeeeeeeeee   rrrrr   rrrrrrrrr  aaaaaaaaaaaaa     cccccccccccccccttttttt:::::ttttttt   iiiiiii   ooooooooooo  nnnn  nnnnnnnn                                                                                                                              | |  
REM   | |   mm:::::::m  m:::::::mmu::::u    u::::u  l::::t:::::::::::::::::t   i:::::i                            A:::::A:::::A           I::::I               mm:::::::m  m:::::::mmu::::u    u::::u  l::::t:::::::::::::::::t   i:::::i                   h::::hh:::::hhh   u::::u    u::::u  mm:::::::m  m:::::::mm  a::::::::::::an:::nn::::::::nn       i:::::n:::nn::::::::nn t:::::::::::::::::t     ee::::::::::::ee r::::rrr:::::::::r a::::::::::::a  cc:::::::::::::::t:::::::::::::::::t   i:::::i oo:::::::::::oon:::nn::::::::nn                                                                                                                            | |  
REM   | |  m::::::::::mm::::::::::u::::u    u::::u  l::::t:::::::::::::::::t    i::::i                           A:::::A A:::::A          I::::I              m::::::::::mm::::::::::u::::u    u::::u  l::::t:::::::::::::::::t    i::::i                   h::::::::::::::hh u::::u    u::::u m::::::::::mm::::::::::m aaaaaaaaa:::::n::::::::::::::nn       i::::n::::::::::::::nnt:::::::::::::::::t    e::::::eeeee:::::er:::::::::::::::::raaaaaaaaa:::::ac:::::::::::::::::t:::::::::::::::::t    i::::io:::::::::::::::n::::::::::::::nn                                                                                                                           | |  
REM   | |  m::::::::::::::::::::::u::::u    u::::u  l::::tttttt:::::::tttttt    i::::i  ---------------         A:::::A   A:::::A         I::::I              m::::::::::::::::::::::u::::u    u::::u  l::::tttttt:::::::tttttt    i::::i  ---------------  h:::::::hhh::::::hu::::u    u::::u m::::::::::::::::::::::m          a::::nn:::::::::::::::n      i::::nn:::::::::::::::tttttt:::::::tttttt   e::::::e     e:::::rr::::::rrrrr::::::r        a::::c:::::::cccccc:::::tttttt:::::::tttttt    i::::io:::::ooooo:::::nn:::::::::::::::n                                                                                                                          | |  
REM   | |  m:::::mmm::::::mmm:::::u::::u    u::::u  l::::l     t:::::t          i::::i  -:::::::::::::-        A:::::A     A:::::A        I::::I              m:::::mmm::::::mmm:::::u::::u    u::::u  l::::l     t:::::t          i::::i  -:::::::::::::-  h::::::h   h::::::u::::u    u::::u m:::::mmm::::::mmm:::::m   aaaaaaa:::::a n:::::nnnn:::::n      i::::i n:::::nnnn:::::n     t:::::t         e:::::::eeeee::::::er:::::r     r:::::r aaaaaaa:::::c::::::c     ccccccc     t:::::t          i::::io::::o     o::::o n:::::nnnn:::::n                                                                                                                          | |  
REM   | |  m::::m   m::::m   m::::u::::u    u::::u  l::::l     t:::::t          i::::i  ---------------       A:::::AAAAAAAAA:::::A       I::::I              m::::m   m::::m   m::::u::::u    u::::u  l::::l     t:::::t          i::::i  ---------------  h:::::h     h:::::u::::u    u::::u m::::m   m::::m   m::::m aa::::::::::::a n::::n    n::::n      i::::i n::::n    n::::n     t:::::t         e:::::::::::::::::e r:::::r     rrrrrraa::::::::::::c:::::c                  t:::::t          i::::io::::o     o::::o n::::n    n::::n                                                                                                                          | |  
REM   | |  m::::m   m::::m   m::::u::::u    u::::u  l::::l     t:::::t          i::::i                       A:::::::::::::::::::::A      I::::I              m::::m   m::::m   m::::u::::u    u::::u  l::::l     t:::::t          i::::i                   h:::::h     h:::::u::::u    u::::u m::::m   m::::m   m::::ma::::aaaa::::::a n::::n    n::::n      i::::i n::::n    n::::n     t:::::t         e::::::eeeeeeeeeee  r:::::r          a::::aaaa::::::c:::::c                  t:::::t          i::::io::::o     o::::o n::::n    n::::n                                                                                                                          | |  
REM   | |  m::::m   m::::m   m::::u:::::uuuu:::::u  l::::l     t:::::t    tttttti::::i                      A:::::AAAAAAAAAAAAA:::::A     I::::I              m::::m   m::::m   m::::u:::::uuuu:::::u  l::::l     t:::::t    tttttti::::i                   h:::::h     h:::::u:::::uuuu:::::u m::::m   m::::m   m::::a::::a    a:::::a n::::n    n::::n      i::::i n::::n    n::::n     t:::::t    ttttte:::::::e           r:::::r         a::::a    a:::::c::::::c     ccccccc     t:::::t    tttttti::::io::::o     o::::o n::::n    n::::n                                                                                                                          | |  
REM   | |  m::::m   m::::m   m::::u:::::::::::::::ul::::::l    t::::::tttt:::::i::::::i                    A:::::A             A:::::A  II::::::II ,,,,,,     m::::m   m::::m   m::::u:::::::::::::::ul::::::l    t::::::tttt:::::i::::::i                  h:::::h     h:::::u:::::::::::::::um::::m   m::::m   m::::a::::a    a:::::a n::::n    n::::n     i::::::in::::n    n::::n     t::::::tttt:::::e::::::::e          r:::::r         a::::a    a:::::c:::::::cccccc:::::c     t::::::tttt:::::i::::::o:::::ooooo:::::o n::::n    n::::n                                                                                                                          | |  
REM   | |  m::::m   m::::m   m::::mu:::::::::::::::l::::::l    tt::::::::::::::i::::::i                   A:::::A               A:::::A I::::::::I ,::::,     m::::m   m::::m   m::::mu:::::::::::::::l::::::l    tt::::::::::::::i::::::i                  h:::::h     h:::::hu:::::::::::::::m::::m   m::::m   m::::a:::::aaaa::::::a n::::n    n::::n     i::::::in::::n    n::::n     tt::::::::::::::te::::::::eeeeeeee  r:::::r         a:::::aaaa::::::ac:::::::::::::::::c     tt::::::::::::::i::::::o:::::::::::::::o n::::n    n::::n ......                                                                                                                   | |  
REM   | |  m::::m   m::::m   m::::m uu::::::::uu:::l::::::l      tt:::::::::::ti::::::i                  A:::::A                 A:::::AI::::::::I ,::::,     m::::m   m::::m   m::::m uu::::::::uu:::l::::::l      tt:::::::::::ti::::::i                  h:::::h     h:::::h uu::::::::uu:::m::::m   m::::m   m::::ma::::::::::aa:::an::::n    n::::n     i::::::in::::n    n::::n       tt:::::::::::tt ee:::::::::::::e  r:::::r          a::::::::::aa:::acc:::::::::::::::c       tt:::::::::::ti::::::ioo:::::::::::oo  n::::n    n::::n .::::.                                                                                                                   | |  
REM   | |  mmmmmm   mmmmmm   mmmmmm   uuuuuuuu  uuullllllll        ttttttttttt iiiiiiii                 AAAAAAA                   AAAAAAIIIIIIIIII ,:::,,     mmmmmm   mmmmmm   mmmmmm   uuuuuuuu  uuullllllll        ttttttttttt iiiiiiii                  hhhhhhh     hhhhhhh   uuuuuuuu  uuummmmmm   mmmmmm   mmmmmm aaaaaaaaaa  aaaannnnnn    nnnnnn     iiiiiiiinnnnnn    nnnnnn         ttttttttttt     eeeeeeeeeeeeee  rrrrrrr           aaaaaaaaaa  aaaa  cccccccccccccccc         ttttttttttt iiiiiiii  ooooooooooo    nnnnnn    nnnnnn ......                                                                                                                   | |  
REM   | |                                                                                                                                         ,:::,                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | |  
REM   | |                                                                                                                                         ,,,,                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | |  
REM   | |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | |  
REM   | |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | |  
REM __| |_________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________| |__
REM __   _________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________   __
REM   | |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | |  `}
          </pre>
          </div>

          <div className={styles.alts}>
            <a href="https://x.com/amplifiedamp" target='_blank'><pre>
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
                <div class="header__title">root@solana:~/act</div>
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
                  <span class="body__row-result">git log</span>
                </div>
                <div class="body__row">
                  <span class="body__row-git--branch">e23h217</span>
                  <span>&nbsp;- (</span>
                  <span class="body__row-git--branch-detail">HEAD - master, origin/master</span>
                  <span>) Adding Solana's resources to ACT</span>
                </div>
                <div class="body__row">
                  <span class="body__row-git--branch">g43e341</span>
                  <span>&nbsp;- Fixing the log</span>
                  <span class="body__row-git--branch-time">&nbsp;(4 weeks ago)&nbsp;</span> 
                  <span class="body__row-git--author">&lt;cwattrus&gt;</span>
                </div>
                <div class="body__row">
                  <span class="body__row-arrow"></span>
                  <span class="body__row-folder">act-resources</span>
                  <span class="body__row-git--label">git:</span>
                  <span class="body__row-git--label">(</span>
                  <span class="body__row-git--branch">master</span>
                  <span class="body__row-git--label">)</span>
                  <span class="body__row-result">git st</span>
                  <span class="body__row-cursor"></span>
                </div>          
              </div>
            </div>
          </div>

          <div class="container">
            <div class="mac-terminal">
              <div class="header">
                <div class="header__op">
                  <span class="header__op-icon header__op-icon--red"></span>
                  <span class="header__op-icon header__op-icon--yellow"></span>
                  <span class="header__op-icon header__op-icon--green"></span>
                </div>
                <div class="header__title">root@solana:~/act</div>
                <div class="header__empty"></div>
              </div>
              <div class="body">
                <div class="body__row">
                  <span class="body__row-arrow"></span>
                  <span class="body__row-folder">contract-address</span>
                  <span class="body__row-git--label">:</span>
                  <span class="body__row-git--branch">GJAFwWjJ3vnTsrQVabjB</span>
                  <span class="body__row-result">VK2TYB1YtRCQXRDfDgUnpump</span>
                </div>         
              </div>
            </div>
          </div>
        </div>

        <div className={styles.alts}>
          <pre>
            {`**###########*********++++++++***++++++++++++====++*####%%%%######**##########*#***####%%%#**+****++
**#############*##*******+++++++++++++++++++++++++**###%%##%#%%%%###**#######*+***#%###***#*++****+=
#######################***+++**++++==++++++++++++++**##%%%%%%%%%%####**####**+*######**********++++=
###########################*++++++%%%#++++++++***+++*#%%%%%%%%%%#######+#***+*###########***++*+++==
#########***#%%%%########**++++*#%%%%%#+===+********#%%%%%%%%%########*+****###########***+++++++++=
%%%%%%%##%%%%%%%%%#######**+=+#%%%%%%%#+=++*****##*##############***#***+**##**####****++++++++=----
%%%%%%%%%%%%%%%%%%%%%#*++++++***#%%%%##*+++++***+*############**++**#*****#%%###**=-=+++==----------
####%%%%#######%%%#%%###****++++*#%%%@%#====+**+***#***######*+=+*****######****++++++=------------*
######%%%######%%%###%%#####*+++#%%%%%%%#===+++********####*********###+***+=======+++==---++++++***
###**##%%%##########*#####****+#%%%%%%%%%+==-=***++**********#********++=-:::-==++****+++++++*******
##***##########**+++++++++++++**++%%%%%%%%*==++==+********###********+===-==--=********++++++******+
#*++++++****#***+++++=========+==*#%%@%%#%%%#*+*******#####***+++***+++=--::--=+*******++++++++***++
##**+=====++++++*****+++====-====#%%%%%%%%##%#******##****+==-==++=---:::-=+************=++++*#*++=+
%#%%##************++*******++==-+%%%%%%%%%#***#********++====----==--::==++**********++++**==--=*+-:
%%%%%####**++++++***###**++=--+#%%%%%%%%%%%%#*******++++===------:::-:-=+++*****+++++++===----=*#==*
%%%#####********+********+++*#%%%%%%%%%%%%%#**+++++++===-:::.::-::.:-====++****+**++===----:=+==++++
###*+***#******#***#*******+***##%%####*###*+++=+==--:::..:-=::..:-===+++****+==-=---=---=+*+=++#***
#*++==+++====**#%%#+=-=+**+******++*#%#**#%#+=----:::::...:-::---=+*+++**+++==+**++=--=+++++*#*###%%`}
          </pre>
        </div>
      </main>
    </>
  )
}
