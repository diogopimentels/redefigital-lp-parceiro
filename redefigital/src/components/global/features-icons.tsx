// Este arquivo vai importar seus SVGs como componentes React
// e exportá-los para serem usados nas features.

import FeatureOne from "../../../public/images/feature-one.svg"; // Ajuste o caminho se necessário
import FeatureTwo from "../../../public/images/feature-two.svg"; // Ajuste o caminho se necessário
import FeatureThree from "../../../public/images/feature-three.svg"; // Ajuste o caminho se necessário
import FeatureFour from "../../../public/images/feature-four.svg"; // Ajuste o caminho se necessário
import FeatureFive from "../../../public/images/feature-five.svg"; // Ajuste o caminho se necessário

// Exporte-os em um objeto para fácil acesso
const FeatureIcons = {
    featureOne: FeatureOne,
    featureTwo: FeatureTwo,
    featureThree: FeatureThree,
    featureFour: FeatureFour,
    featureFive: FeatureFive,
};

export default FeatureIcons;