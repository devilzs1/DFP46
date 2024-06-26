import "katex/dist/katex.min.css";
import { BlockMath, InlineMath } from "react-katex";
import { fig1, fig2, fig3, fig4, fig5, fig6, } from "../../assets/DualNature";
import HertzExp from "./labs/HertzExp";

const DualNatureData = [
  {
    id: 1,
    name: "Introduction",
    slug: "introduction",
    subtopic: [
      {
        id: 0,
        title: "",
        text: (
          <>
            The Maxwell’s equations of electromagnetism and Hertz experiments on
            the generation and detection of electromagnetic waves in 1887
            strongly established the wave nature of light. Towards the same
            period at the end of 19th century, experimental investigations on
            conduction of electricity (electric discharge) through gases at low
            pressure in a discharge tube led to many historic discoveries. The
            discovery of X-rays by Roentgen in 1895, and of electron by J. J.
            Thomson in 1897, were important milestones in the understanding of
            atomic structure. It was found that at sufficiently low pressure of
            about 0.001 mm of mercury column, a discharge took place between the
            two electrodes on applying the electric field to the gas in the
            discharge tube. A fluorescent glow appeared on the glass opposite to
            cathode. The colour of glow of the glass depended on the type of
            glass, it being yellowish-green for soda glass. The cause of this
            fluorescence was attributed to the radiation which appeared to be
            coming from the cathode. These cathode rays were discovered, in
            1870, by William Crookes who later, in 1879, suggested that these
            rays consisted of streams of fast moving negatively charged
            particles. The British physicist J. J. Thomson (1856-1940) confirmed
            this hypothesis. By applying mutually perpendicular electric and
            magnetic fields across the discharge tube, J. J. Thomson was the
            first to determine experimentally the speed and the specific charge
            [charge to mass ratio (e/m)] of the cathode ray particles. They were
            found to travel with speeds ranging from about 0.1 to 0.2 times the
            speed of light (<InlineMath math="3 \times 10^{8}" />
            m/s). The presently accepted value of e/m is{" "}
            <InlineMath math="1.76 \times 10^{11}" />
            C/kg. Further, the value of e/m was found to be independent of the
            nature of the material/metal used as the cathode (emitter), or the
            gas introduced in the discharge tube. This observation suggested the
            universality of the cathode ray particles.
            <br />
            <br />
            Around the same time, in 1887, it was found that certain metals,
            when irradiated by ultraviolet light, emitted negatively charged
            particles having small speeds. Also, certain metals when heated to a
            high temperature were found to emit negatively charged particles.
            The value of e/m of these particles was found to be the same as that
            for cathode ray particles. These observations thus established that
            all these particles, although produced under different conditions,
            were identical in nature. J. J. Thomson, in 1897, named these
            particles as electrons, and suggested that they were fundamental,
            universal constituents of matter. For his epoch-making discovery of
            electron, through his theoretical and experimental investigations on
            conduction of electricity by gasses, he was awarded the Nobel Prize
            in Physics in 1906. In 1913, the American physicist R. A. Millikan
            (1868-1953) performed the pioneering oil-drop experiment for the
            precise measurement of the charge on an electron. He found that the
            charge on an oil-droplet was always an integral multiple of an
            elementary charge, <InlineMath math="1.602 \times 10^{–19}" /> C.
            Millikan’s experiment established that electric charge is quantised.
            From the values of charge (e) and specific charge (e/m), the mass
            (m) of the electron could be determined.
          </>
        ),
        image: [fig1,],
      },
    ],
    isLab: false,
    lab: "",
  },
  {
    id: 2,
    name: "Electron Emission",
    slug: "electron-emission",
    subtopic: [
      {
        id: 0,
        title: "",
        text: (
          <>
            We know that metals have free electrons (negatively charged
            particles) that are responsible for their conductivity. However, the
            free electrons cannot normally escape out of the metal surface. If
            an electron attempts to come out of the metal, the metal surface
            acquires a positive charge and pulls the electron back to the metal.
            The free electron is thus held inside the metal surface by the
            attractive forces of the ions. Consequently, the electron can come
            out of the metal surface only if it has got sufficient energy to
            overcome the attractive pull. A certain minimum amount of energy is
            required to be given to an electron to pull it out from the surface
            of the metal. This minimum energy required by an electron to escape
            from the metal surface is called the work function of the metal. It
            is generally denoted by <InlineMath math="\phi_0" /> and measured in
            eV (electron volt). One electron volt is the energy gained by an
            electron when it has been accelerated by a potential difference of 1
            volt, so that 1 eV =
            <InlineMath math="1.602 \times 10^{–19}" /> J. <br />
            <br />
            This unit of energy is commonly used in atomic and nuclear physics.
            The work function (<InlineMath math="\phi_0" /> ) depends on the
            properties of the metal and the nature of its surface. The minimum
            energy required for the electron emission from the metal surface can
            be supplied to the free electrons by any one of the following
            physical processes: <br />
            <br />
            (i) <strong>Thermionic emission</strong>: By suitably heating,
            sufficient thermal energy can be imparted to the free electrons to
            enable them to come out of the metal. <br />
            <br />
            (ii) <strong>Field emission</strong>: By applying a very strong
            electric field (of the order of <InlineMath math="10^{8}" /> V
            <InlineMath math="m^{–1}" />) to a metal, electrons can be pulled
            out of the metal, as in a spark plug. <br />
            <br />
            (iii) <strong>Photoelectric emission</strong>: When light of
            suitable frequency illuminates a metal surface, electrons are
            emitted from the metal surface. These photo(light)-generated
            electrons are called photoelectrons.
          </>
        ),
        image: [fig2,],
      },
    ],
    isLab: false,
    lab: "",
  },
  {
    id: 3,
    name: "Photoelectric Effect",
    slug: "photoelectric-effect",
    subtopic: [
      {
        id: 1,
        title: "Hertz’s observations",
        text: (
          <>
            The phenomenon of photoelectric emission was discovered in 1887 by
            Heinrich Hertz (1857-1894), during his electromagnetic wave
            experiments. In his experimental investigation on the production of
            electromagnetic waves by means of a spark discharge, Hertz observed
            that high voltage sparks across the detector loop were enhanced when
            the emitter plate was illuminated by ultraviolet light from an arc
            lamp. <br />
            <br />
            Light shining on the metal surface somehow facilitated the escape of
            free, charged particles which we now know as electrons. When light
            falls on a metal surface, some electrons near the surface absorb
            enough energy from the incident radiation to overcome the attraction
            of the positive ions in the material of the surface. After gaining
            sufficient energy from the incident light, the electrons escape from
            the surface of the metal into the surrounding space.
          </>
        ),
        image: [],
      },
      {
        id: 2,
        title: "Hallwachs’ and Lenard’s observations",
        text: (
          <>
            Wilhelm Hallwachs and Philipp Lenard investigated the phenomenon of
            photoelectric emission in detail during 1886-1902. <br />
            <br />
            Lenard (1862-1947) observed that when ultraviolet radiations were
            allowed to fall on the emitter plate of an evacuated glass tube
            enclosing two electrodes (metal plates), current flows in the
            circuit (Fig. 11.1). As soon as the ultraviolet radiations were
            stopped, the current flow also stopped. These observations indicate
            that when ultraviolet radiations fall on the emitter plate C,
            electrons are ejected from it which are attracted towards the
            positive, collector plate A by the electric field. The electrons
            flow through the evacuated glass tube, resulting in the current
            flow. Thus, light falling on the surface of the emitter causes
            current in the external circuit. Hallwachs and Lenard studied how
            this photo current varied with collector plate potential, and with
            frequency and intensity of incident light. <br />
            <br />
            Hallwachs, in 1888, undertook the study further and connected a
            negatively charged zinc plate to an electroscope. He observed that
            the zinc plate lost its charge when it was illuminated by
            ultraviolet light. Further, the uncharged zinc plate became
            positively charged when it was irradiated by ultraviolet light.
            Positive charge on a positively charged zinc plate was found to be
            further enhanced when it was illuminated by ultraviolet light. From
            these observations he concluded that negatively charged particles
            were emitted from the zinc plate under the action of ultraviolet
            light. <br />
            <br />
            After the discovery of the electron in 1897, it became evident that
            the incident light causes electrons to be emitted from the emitter
            plate. Due to negative charge, the emitted electrons are pushed
            towards the collector plate by the electric field. Hallwachs and
            Lenard also observed that when ultraviolet light fell on the emitter
            plate, no electrons were emitted at all when the frequency of the
            incident light was smaller than a certain minimum value, called the
            threshold frequency. This minimum frequency depends on the nature of
            the material of the emitter plate. <br />
            <br />
            It was found that certain metals like zinc, cadmium, magnesium,
            etc., responded only to ultraviolet light, having short wavelength,
            to cause electron emission from the surface. However, some alkali
            metals such as lithium, sodium, potassium, caesium and rubidium were
            sensitive even to visible light. All these photosensitive substances
            emit electrons when they are illuminated by light. After the
            discovery of electrons, these electrons were termed as
            photoelectrons. The phenomenon is called photoelectric effect.
          </>
        ),
        image: [],
      },
    ],
    isLab: true,
    lab: HertzExp,
  },
  {
    id: 4,
    name: "Experimental Study of Photoelectric Effect",
    slug: "experimental-study-of-photoelectric-effect",
    subtopic: [
      {
        id: 0,
        title: "",
        text: (
          <>
            Figure 11.1 depicts a schematic view of the arrangement used for the
            experimental study of the photoelectric effect. It consists of an
            evacuated glass/quartz tube having a thin photosensitive plate C and
            another metal plate A. Monochromatic light from the source S of
            sufficiently short wavelength passes through the window W and falls
            on the photosensitive plate C (emitter). A transparent quartz window
            is sealed on to the glass tube, which permits ultraviolet radiation
            to pass through it and irradiate the photosensitive plate C. The
            electrons are emitted by the plate C and are collected by the plate
            A (collector), by the electric field created by the battery. The
            battery maintains the potential difference between the plates C and
            A, that can be varied. The polarity of the plates C and A can be
            reversed by a commutator. Thus, the plate A can be maintained at a
            desired positive or negative potential with respect to emitter C.
            When the collector plate A is positive with respect to the emitter
            plate C, the electrons are attracted to it. The emission of
            electrons causes flow of electric current in the circuit. The
            potential difference between the emitter and collector plates is
            measured by a voltmeter (V) whereas the resulting photo current
            flowing in the circuit is measured by a microammeter (
            <InlineMath math="\mu A" />
            ). The photoelectric current can be increased or decreased by
            varying the potential of collector plate A with respect to the
            emitter plate C. The intensity and frequency of the incident light
            can be varied, as can the potential difference V between the emitter
            C and the collector A. <br />
            <br />
            We can use the experimental arrangement of Fig. 11.1 to study the
            variation of photocurrent with (a) intensity of radiation, (b)
            frequency of incident radiation, (c) the potential difference
            between the plates A and C, and (d) the nature of the material of
            plate C. Light of different frequencies can be used by putting
            appropriate coloured filter or coloured glass in the path of light
            falling on the emitter C. The intensity of light is varied by
            changing the distance of the light source from the emitter.
          </>
        ),
        image: [fig3, ],
      },
      {
        id: 1,
        title: "Effect of intensity of light on photocurrent",
        text: (
          <>
            The collector A is maintained at a positive potential with respect
            to emitter C so that electrons ejected from C are attracted towards
            collector A. Keeping the frequency of the incident radiation and the
            potential fixed, the intensity of light is varied and the resulting
            photoelectric current is measured each time. It is found that the
            photocurrent increases linearly with intensity of incident light as
            shown graphically in Fig. 11.2. The photocurrent is directly
            proportional to the number of photoelectrons emitted per second.
            This implies that the number of photoelectrons emitted per second is
            directly proportional to the intensity of incident radiation.
          </>
        ),
        image: [],
      },
      {
        id: 2,
        title: "Effect of potential on photoelectric current",
        text: (
          <>
            We first keep the plate A at some positive potential with respect to
            the plate C and illuminate the plate C with light of fixed frequency
            <InlineMath math="\nu" /> and fixed intensity{" "}
            <InlineMath math="I_1" /> . We next vary the positive potential of
            plate A gradually and measure the resulting photocurrent each time.
            It is found that the photoelectric current increases with increase
            in positive (accelerating) potential. At some stage, for a certain
            positive potential of plate A, all the emitted electrons are
            collected by the plate A and the photoelectric current becomes
            maximum or saturates. If we increase the accelerating potential of
            plate A further, the photocurrent does not increase. This maximum
            value of the photoelectric current is called saturation current.
            Saturation current corresponds to the case when all the
            photoelectrons emitted by the emitter plate C reach the collector
            plate A. <br />
            <br />
            We now apply a negative (retarding) potential to the plate A with
            respect to the plate C and make it increasingly negative gradually.
            When the polarity is reversed, the electrons are repelled and only
            the sufficiently energetic electrons are able to reach the collector
            A. The photocurrent is found to decrease rapidly until it drops to
            zero at a certain sharply defined, critical value of the negative
            potential <InlineMath math="V_0" /> on the plate A. For a particular
            frequency of incident radiation, the minimum negative (retarding)
            potential V0 given to the plate A for which the photocurrent stops
            or becomes zero is called the cutoff or stopping potential. <br />
            <br />
            The interpretation of the observation in terms of photoelectrons is
            straightforward. All the photoelectrons emitted from the metal do
            not have the same energy. Photoelectric current is zero when the
            stopping potential is sufficient to repel even the most energetic
            photoelectrons, with the maximum kinetic energy (
            <InlineMath math="K_{max}" />
            ), so that
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
              <BlockMath math="K_{max} = eV_0" />
              <span style={{ margin: "1.5rem 0" }}>(11.1)</span>
            </div>
            We can now repeat this experiment with incident radiation of the
            same frequency but of higher intensity <InlineMath math="I_2" /> and{" "}
            <InlineMath math="I_3" /> (<InlineMath math="I_3 > I_2 > I_1" /> ).
            We note that the saturation currents are now found to be at higher
            values. This shows that more electrons are being emitted per second,
            proportional to the intensity of incident radiation. But the
            stopping potential remains the same as that for the incident
            radiation of intensity <InlineMath math="I_1" /> , as shown
            graphically in Fig. 11.3. Thus, for a given frequency of the
            incident radiation, the stopping potential is independent of its
            intensity. In other words, the maximum kinetic energy of
            photoelectrons depends on the light source and the emitter plate
            material, but is independent of intensity of incident radiation.
          </>
        ),
        image: [],
      },
      {
        id: 3,
        title:
          "Effect of frequency of incident radiation on stopping potential",
        text: (
          <>
            We now study the relation between the frequency{" "}
            <InlineMath math="\nu" /> of the incident radiation and the stopping
            potential <InlineMath math="V_0" /> . We suitably adjust the same
            intensity of light radiation at various frequencies and study the
            variation of photocurrent with collector plate potential. The
            resulting variation is shown in Fig. 11.4. We obtain different
            values of stopping potential but the same value of the saturation
            current for incident radiation of different frequencies. The energy
            of the emitted electrons depends on the frequency of the incident
            radiations. The stopping potential is more negative for higher
            frequencies of incident radiation. Note from Fig. 11.4 that the
            stopping potentials are in the order{" "}
            <InlineMath math="V_{03} > V{02} > V{01}" /> if the frequencies are
            in the order <InlineMath math="\nu_3 > \nu_2 > \nu_1" /> . This
            implies that greater the frequency of incident light, greater is the
            maximum kinetic energy of the photoelectrons. Consequently, we need
            greater retarding potential to stop them completely. If we plot a
            graph between the frequency of incident radiation and the
            corresponding stopping potential for different metals we get a
            straight line, as shown in Fig. 11.5. <br />
            <br />
            The graph shows that
            <br />
            (i) the stopping potential <InlineMath math="V_0" /> varies linearly
            with the frequency of incident radiation for a given photosensitive
            material.
            <br />
            (ii) there exists a certain minimum cut-off frequency{" "}
            <InlineMath math="\nu_0" /> for which the stopping potential is
            zero. <br />
            <br />
            These observations have two implications:
            <br />
            (i) The maximum kinetic energy of the photoelectrons varies linearly
            with the frequency of incident radiation, but is independent of its
            intensity.
            <br />
            (ii) For a frequency <InlineMath math="\nu" /> of incident
            radiation, lower than the cut-off frequency{" "}
            <InlineMath math="\nu_0" /> , no photoelectric emission is possible
            even if the intensity is large. <br />
            This minimum, cut-off frequency <InlineMath math="\nu_0" /> , is
            called the threshold frequency. It is different for different
            metals.
            <br />
            <br />
            Different photosensitive materials respond differently to light.
            Selenium is more sensitive than zinc or copper. The same
            photosensitive substance gives different response to light of
            different wavelengths. For example, ultraviolet light gives rise to
            photoelectric effect in copper while green or red light does not.
            <br />
            <br />
            Note that in all the above experiments, it is found that, if
            frequency of the incident radiation exceeds the threshold frequency,
            the photoelectric emission starts instantaneously without any
            apparent time lag, even if the incident radiation is very dim. It is
            now known that emission starts in a time of the order of{" "}
            <InlineMath math="10{– 9}" /> s or less. <br />
            <br />
            We now summarise the experimental features and observations
            described in this section.
            <br />
            (i) For a given photosensitive material and frequency of incident
            radiation (above the threshold frequency), the photoelectric current
            is directly proportional to the intensity of incident light (Fig.
            11.2).
            <br />
            (ii) For a given photosensitive material and frequency of incident
            radiation, saturation current is found to be proportional to the
            intensity of incident radiation whereas the stopping potential is
            independent of its intensity (Fig. 11.3).
            <br />
            (iii) For a given photosensitive material, there exists a certain
            minimum cut-off frequency of the incident radiation, called the
            threshold frequency, below which no emission of photoelectrons takes
            place, no matter how intense the incident light is. Above the
            threshold frequency, the stopping potential or equivalently the
            maximum kinetic energy of the emitted photoelectrons increases
            linearly with the frequency of the incident radiation, but is
            independent of its intensity (Fig. 11.5).
            <br />
            (iv) The photoelectric emission is an instantaneous process without
            any apparent time lag (~
            <InlineMath math="10^{-9}" /> s or less), even when the incident
            radiation is made exceedingly dim.
          </>
        ),
        image: [],
      },
    ],
    isLab: false,
    lab: "",
  },
  {
    id: 5,
    name: "Photoelectric Effect and Wave Theory of Light",
    slug: "photoelectric-effect-and-wave-theory-of-light",
    subtopic: [
      {
        id: 0,
        title: "",
        text: (
          <>
            The wave nature of light was well established by the end of the
            nineteenth century. The phenomena of interference, diffraction and
            polarisation were explained in a natural and satisfactory way by the
            wave picture of light. <br />
            <br />
            According to this picture, light is an electromagnetic wave
            consisting of electric and magnetic fields with continuous
            distribution of energy over the region of space over which the wave
            is extended. Let us now see if this wave picture of light can
            explain the observations on photoelectric emission given in the
            previous section. According to the wave picture of light, the free
            electrons at the surface of the metal (over which the beam of
            radiation falls) absorb the radiant energy continuously. The greater
            the intensity of radiation, the greater are the amplitude of
            electric and magnetic fields. Consequently, the greater the
            intensity, the greater should be the energy absorbed by each
            electron. In this picture, the maximum kinetic energy of the
            photoelectrons on the surface is then expected to increase with
            increase in intensity. Also, no matter what the frequency of
            radiation is, a sufficiently intense beam of radiation (over
            sufficient time) should be able to impart enough energy to the
            electrons, so that they exceed the minimum energy needed to escape
            from the metal surface . A threshold frequency, therefore, should
            not exist. These expectations of the wave theory directly contradict
            observations (i), (ii) and (iii) given at the end of sub-section
            11.4.3. <br />
            <br />
            Further, we should note that in the wave picture, the absorption of
            energy by electron takes place continuously over the entire
            wavefront of the radiation. Since a large number of electrons absorb
            energy, the energy absorbed per electron per unit time turns out to
            be small. Explicit calculations estimate that it can take hours or
            more for a single electron to pick up sufficient energy to overcome
            the work function and come out of the metal. This conclusion is
            again in striking contrast to observation (iv) that the
            photoelectric emission is instantaneous. In short, the wave picture
            is unable to explain the most basic features of photoelectric
            emission.
          </>
        ),
        image: [fig1, ],
      },
    ],
    isLab: false,
    lab: "",
  },
  {
    id: 6,
    name: "Einstein's Photoelectric Equation: Energy Quantum of Radiation",
    slug: "einsteins-photoelectric-equation-energy-quantum-of-radiation",
    subtopic: [
      {
        id: 0,
        title: "",
        text: (
          <>
            In 1905, Albert Einstein (1879-1955) proposed a radically new
            picture of electromagnetic radiation to explain photoelectric
            effect. In this picture, photoelectric emission does not take place
            by continuous absorption of energy from radiation. Radiation energy
            is built up of discrete units – the so called quanta of energy of
            radiation. Each quantum of radiant energy has energy{" "}
            <InlineMath math="h\nu" />, where h is Planck’s constant and{" "}
            <InlineMath math="\nu" /> the frequency of light. In photoelectric
            effect, an electron absorbs a quantum of energy (
            <InlineMath math="h\nu" /> ) of radiation. If this quantum of energy
            absorbed exceeds the minimum energy needed for the electron to
            escape from the metal surface (work function{" "}
            <InlineMath math="\phi_0" /> ), the electron is emitted with maximum
            kinetic energy
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
              <BlockMath math="K_{max} = h\nu - \phi_0" />
              <span style={{ margin: "1.5rem 0" }}>(11.2)</span>
            </div>
            More tightly bound electrons will emerge with kinetic energies less
            than the maximum value. Note that the intensity of light of a given
            frequency is determined by the number of photons incident per
            second. Increasing the intensity will increase the number of emitted
            electrons per second. However, the maximum kinetic energy of the
            emitted photoelectrons is determined by the energy of each photon.
            <br />
            <br />
            Equation (11.2) is known as Einstein’s photoelectric equation. We
            now see how this equation accounts in a simple and elegant manner
            all the observations on photoelectric effect given at the end of
            sub-section 11.4.3.
            <ul>
              <li>
                According to Eq. (11.2), <InlineMath math="K_{max}" /> depends
                linearly on n, and is independent of intensity of radiation, in
                agreement with observation. This has happened because in
                Einstein’s picture, photoelectric effect arises from the
                absorption of a single quantum of radiation by a single
                electron. The intensity of radiation (that is proportional to
                the number of energy quanta per unit area per unit time) is
                irrelevant to this basic process.
              </li>
              <li>
                Since <InlineMath math="K_{max}" /> must be non-negative, Eq.
                (11.2 ) implies that photoelectric emission is possible only if
                <InlineMath math="h\nu > \phi_0" /> or{" "}
                <InlineMath math="\nu > \nu_0" /> , where
                <div
                  style={{ display: "flex", justifyContent: "space-evenly" }}
                >
                  <BlockMath math="\nu_0 = \frac{\phi_0}{h}" />
                  <span style={{ margin: "1.5rem 0" }}>(11.3)</span>
                </div>
                Equation (11.3) shows that the greater the work function{" "}
                <InlineMath math="\phi_0" /> , the higher the minimum or
                threshold frequency <InlineMath math="\nu_0" /> needed to emit
                photoelectrons. Thus, there exists a threshold frequency{" "}
                <InlineMath math="\nu_0(=\phi_0 \div h)" /> for the metal
                surface, below which no photoelectric emission is possible, no
                matter how intense the incident radiation may be or how long it
                falls on the surface.
              </li>
              <li>
                In this picture, intensity of radiation as noted above, is
                proportional to the number of energy quanta per unit area per
                unit time. The greater the number of energy quanta available,
                the greater is the number of electrons absorbing the energy
                quanta and greater, therefore, is the number of electrons coming
                out of the metal (for <InlineMath math="\nu > \nu_0" /> ). This
                explains why, for <InlineMath math="\nu > \nu_0" /> ,
                photoelectric current is proportional to intensity.
              </li>
              <li>
                In Einstein’s picture, the basic elementary process involved in
                photoelectric effect is the absorption of a light quantum by an
                electron. This process is instantaneous. Thus, whatever may be
                the intensity i.e., the number of quanta of radiation per unit
                area per unit time, photoelectric emission is instantaneous. Low
                intensity does not mean delay in emission, since the basic
                elementary process is the same. Intensity only determines how
                many electrons are able to participate in the elementary process
                (absorption of a light quantum by a single electron) and,
                therefore, the photoelectric current.
              </li>
            </ul>
            Using Eq. (11.1), the photoelectric equation, Eq. (11.2), can be
            written as
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
              <BlockMath math="eV_0 = h\nu - \phi_0" />
              <span style={{ margin: "1.5rem 0" }}>or</span>
              <BlockMath math="\nu \geq \nu_0" />
            </div>
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
              <span style={{ margin: "1.5rem 0" }}>or</span>
              <BlockMath math="V_0 = \frac{h}{e} \nu - \frac{\phi_0}{e}" />
              <span style={{ margin: "1.5rem 0" }}>(11.4)</span>
            </div>
            This is an important result. It predicts that the{" "}
            <InlineMath math="V_0" /> versus n curve is a straight line with
            slope = (h/e), independent of the nature of the material. During
            1906-1916, Millikan performed a series of experiments on
            photoelectric effect, aimed at disproving Einstein’s photoelectric
            equation. He measured the slope of the straight line obtained for
            sodium, similar to that shown in Fig. 11.5. Using the known value of
            e, he determined the value of Planck’s constant h. This value was
            close to the value of Planck’s contant (={" "}
            <BlockMath math="6.626 \times 10{–34}" /> J s) determined in an
            entirely different context. In this way, in 1916, Millikan proved
            the validity of Einstein’s photoelectric equation, instead of
            disproving it. <br />
            <br />
            The successful explanation of photoelectric effect using the
            hypothesis of light quanta and the experimental determination of
            values of h and <InlineMath math="\phi_0" /> , in agreement with
            values obtained from other experiments, led to the acceptance of
            Einstein’s picture of photoelectric effect. Millikan verified
            photoelectric equation with great precision, for a number of alkali
            metals over a wide range of radiation frequencies.
          </>
        ),
        image: [fig4, ],
      },
    ],
    isLab: false,
    lab: "",
  },
  {
    id: 7,
    name: "Particle Nature of Light: The Photon",
    slug: "particle-nature-of-light-the-photon",
    subtopic: [
      {
        id: 0,
        title: "",
        text: (
          <>
            Photoelectric effect thus gave evidence to the strange fact that
            light in interaction with matter behaved as if it was made of quanta
            or packets of energy, each of energy h<InlineMath math="\nu" />.{" "}
            <br />
            <br />
            Is the light quantum of energy to be associated with a particle?
            Einstein arrived at the important result, that the light quantum can
            also be associated with momentum (h
            <InlineMath math="\nu" />
            /c). A definite value of energy as well as momentum is a strong sign
            that the light quantum can be associated with a particle. This
            particle was later named photon. The particle-like behaviour of
            light was further confirmed, in 1924, by the experiment of A.H.
            Compton (1892-1962) on scattering of X-rays from electrons. In 1921,
            Einstein was awarded the Nobel Prize in Physics for his contribution
            to theoretical physics and the photoelectric effect. In 1923,
            Millikan was awarded the Nobel Prize in physics for his work on the
            elementary charge of electricity and on the photoelectric effect.{" "}
            <br />
            <br />
            We can summarise the photon picture of electromagnetic radiation as
            follows: <br />
            (i) In interaction of radiation with matter, radiation behaves as if
            it is made up of particles called photons. <br />
            (ii) Each photon has energy E (=h
            <br />
            <InlineMath math="\nu" />) and momentum p (= h
            <InlineMath math="\nu" />
            /c), and speed c, the speed of light. <br />
            (iii) All photons of light of a particular frequency n, or
            wavelength l, have the same energy E (=h
            <InlineMath math="\nu" /> = hc/
            <InlineMath math="\lambda" />) and momentum p (= h
            <InlineMath math="\nu" />
            /c= h/
            <InlineMath math="\lambda" />
            ), whatever the intensity of radiation may be. By increasing the
            intensity of light of given wavelength, there is only an increase in
            the number of photons per second crossing a given area, with each
            photon having the same energy. Thus, photon energy is independent of
            intensity of radiation. <br />
            (iv) Photons are electrically neutral and are not deflected by
            electric and magnetic fields. <br />
            (v) In a photon-particle collision (such as photon-electron
            collision), the total energy and total momentum are conserved.
            However, the number of photons may not be conserved in a collision.
            The photon may be absorbed or a new photon may be created.
          </>
        ),
        image: [fig5, ],
      },
    ],
    isLab: false,
    lab: "",
  },
  {
    id: 8,
    name: "Wave Nature of Matter",
    slug: "wave-nature-of-matter",
    subtopic: [
      {
        id: 0,
        title: "",
        text: (
          <>
            The dual (wave-particle) nature of light (electromagnetic radiation,
            in general) comes out clearly from what we have learnt in this and
            the preceding chapters. The wave nature of light shows up in the
            phenomena of interference, diffraction and polarisation. On the
            other hand, in photoelectric effect and Compton effect which involve
            energy and momentum transfer, radiation behaves as if it is made up
            of a bunch of particles – the photons. Whether a particle or wave
            description is best suited for understanding an experiment depends
            on the nature of the experiment. For example, in the familiar
            phenomenon of seeing an object by our eye, both descriptions are
            important. The gathering and focussing mechanism of light by the
            eye-lens is well described in the wave picture. But its absorption
            by the rods and cones (of the retina) requires the photon picture of
            light. <br />
            <br />A natural question arises: If radiation has a dual
            (waveparticle) nature, might not the particles of nature (the
            electrons, protons, etc.) also exhibit wave-like character? In 1924,
            the French physicist Louis Victor de Broglie (pronounced as de Broy)
            (1892-1987) put forward the bold hypothesis that moving particles of
            matter should display wave-like properties under suitable
            conditions. He reasoned that nature was symmetrical and that the two
            basic physical entities – matter and energy, must have symmetrical
            character. If radiation shows dual aspects, so should matter. De
            Broglie proposed that the wave length <InlineMath math="\lambda" />{" "}
            associated with a particle of momentum p is given as
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
              <BlockMath math="\lambda = \frac{h}{p} = \frac{h}{mv}" />
              <span style={{ margin: "1.5rem 0" }}>(11.5)</span>
            </div>
            where m is the mass of the particle and v its speed. Equation (11.5)
            is known as the de Broglie relation and the wavelength{" "}
            <InlineMath math="\lambda" /> of the matter wave is called de
            Broglie wavelength. The dual aspect of matter is evident in the de
            Broglie relation. On the left hand side of Eq. (11.5),{" "}
            <InlineMath math="\lambda" /> is the attribute of a wave while on
            the right hand side the momentum p is a typical attribute of a
            particle. Planck’s constant h relates the two attributes. <br />
            <br />
            Equation (11.5) for a material particle is basically a hypothesis
            whose validity can be tested only by experiment. However, it is
            interesting to see that it is satisfied also by a photon. For a
            photon, as we have seen,
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
              <BlockMath math="p = \frac{h\nu}{c}" />
              <span style={{ margin: "1.5rem 0" }}>(11.6)</span>
            </div>
            Therefore,
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
              <BlockMath math="\frac{h}{p} = \frac{c}{\nu} = \lambda" />
              <span style={{ margin: "1.5rem 0" }}>(11.7)</span>
            </div>
            That is, the de Broglie wavelength of a photon given by Eq. (11.5)
            equals the wavelength of electromagnetic radiation of which the
            photon is a quantum of energy and momentum. <br />
            <br />
            Clearly, from Eq. (11.5 ), <InlineMath math="\lambda" /> is smaller
            for a heavier particle (large m) or more energetic particle (large
            v). For example, the de Broglie wavelength of a ball of mass 0.12 kg
            moving with a speed of 20 m s–1 is easily calculated:
            <BlockMath math="p = mv = 0.12 kg \times 20 ms^{-1} = 2.40 kg ms^{-1}" />
            <BlockMath math="\lambda = \frac{h}{p} = \frac{6.63 \times 10^{-34}Js}{2.40 kg ms^{-1}} = 2.76 \times 10^{-34}m" />
            <br />
            <br />
            This wavelength is so small that it is beyond any measurement. This
            is the reason why macroscopic objects in our daily life do not show
            wavelike properties. On the other hand, in the sub-atomic domain,
            the wave character of particles is significant and measurable.
          </>
        ),
        image: [fig6,],
      },
    ],
    isLab: false,
    lab: "",
  },
];

export default DualNatureData;
