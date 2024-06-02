import React from 'react';

import InfoCard from '@components/info-card/InfoCard';

import { genRuleInstructions } from '@variables/WebData';

const PrivacyPage = () => {
  const ruleInstruction = genRuleInstructions();
  return <InfoCard title={'privacyPolicy'} content={ruleInstruction} />;
};

export default PrivacyPage;
