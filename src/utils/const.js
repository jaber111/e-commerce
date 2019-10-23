export const CONST_ACCESS_TOKEN = "access_token";
export const CONST_REFRESH_TOKEN = "refresh_token";

export const GET_BUTTONS_TYPES = "GET_BUTTONS_TYPES";

export const CIRCUIT_VALIDATION_CONST = {
  NEXT: "PROCHAIN",
  SUCCESS: "SUCCES"
};

export const STATUS2 = {
  ENREGISTREE: "Enregistrée",
  RAPPELEE: "Rappelée",
  SIGNEE: "Signée",
  VALIDEE: "Validée",
  REJETEE: "Rejetée client",
  ABANDONNEE: "Abandonnée",
  PRET_SIGNER: "Prêt à signer",
  ENCOURS_VALIDATION: "En cours de validation",
  ENCOURS_SIGNATURE: "En cours de signature",
  MODIFIER: "En cours de modification"
};
export const STATUS = {
  ENREGISTREE: "ENREGISTREE",
  RAPPELEE: "RAPPELEE",
  SIGNEE: "SIGNEE",
  VALIDEE: "VALIDEE",
  REJETEE: "REJETEE",
  ABANDONNEE: "ABANDONNEE",
  PRET_SIGNER: "PRET_SIGNER",
  ENCOURS_VALIDATION: "ENCOURS_VALIDATION",
  ENCOURS_SIGNATURE: "ENCOURS_SIGNATURE",
  MODIFIER: "MODIFIER"
};

export const BUTTONS = {
  CANCEL: {
    type: "CANCEL",
    request: "",
    variant: "gray",
    label: "button.cancel"
  },
  RETURN: {
    type: "RETURN",
    request: "",
    variant: "gray",
    label: "button.return"
  },
  SAVE: {
    type: "SAVE",
    request: "ENREGISTREE",
    variant: "primary",
    label: "button.save"
  },
  UPDATE: {
    type: "UPDATE",
    request: "MODIFIER",
    variant: "primary",
    label: "button.update"
  },
  VALIDATE: {
    type: "VALIDATE",
    request: "VALIDEE",
    variant: "yellow",
    label: "button.validate"
  },
  SIGN: {
    type: "SIGN",
    request: "SIGNEE",
    variant: "yellow",
    label: "button.sign"
  },
  REJECT: {
    type: "REJECT",
    request: "REJETEE",
    variant: "outlinedWhite",
    label: "button.reject"
  },
  REMIND: {
    type: "REMIND",
    request: "RAPPELEE",
    variant: "primary",
    label: "button.remind"
  },
  ABANDON: {
    type: "ABANDON",
    request: "ABANDONNEE",
    variant: "outlinedWhite",
    label: "button.abandon"
  },
  SUBMIT_FOR_SIGNATURE: {
    type: "SUBMIT_FOR_SIGNATURE",
    request: "ENCOURS_SIGNATURE",
    variant: "primary",
    label: "button.submit_for_signature"
  },
  SUBMIT_FOR_VALIDATION: {
    type: "SUBMIT_FOR_VALIDATION",
    request: "ENCOURS_VALIDATION",
    variant: "primary",
    label: "button.submit_for_validation"
  }
};

export const PAGES_MODES = {
  CREATION: "CREATION",
  DETAIL: "DETAIL",
  UPDATE: "UPDATE"
};

export const PAGE_RULES_PROPERTIES = {
  PAGE_MODE: "PAGE_MODE",
  STATUS: "STATUS",
  DOUBLE_VALIDATION: "DOUBLE_VALIDATION",
  SIGNATURE: "SIGNATURE",
  CREATOR: "CREATOR",
  VALIDATOR: "VALIDATOR",
  SIGNATOR: "SIGNATOR"
};

export const PAGES_RULES = [
  {
    rule: [
      {
        [PAGE_RULES_PROPERTIES.PAGE_MODE]: [
          PAGES_MODES.CREATION,
          PAGES_MODES.UPDATE
        ]
      },
      {
        [PAGE_RULES_PROPERTIES.STATUS]: [
          null,
          STATUS.ENREGISTREE,
          STATUS.RAPPELEE,
          STATUS.REJETEE
        ]
      }
    ],
    buttons: [BUTTONS.CANCEL, BUTTONS.SAVE]
  },
  {
    rule: [
      {
        [PAGE_RULES_PROPERTIES.PAGE_MODE]: [PAGES_MODES.DETAIL]
      }
    ],
    buttons: [BUTTONS.RETURN]
  },
  {
    rule: [
      {
        [PAGE_RULES_PROPERTIES.PAGE_MODE]: [
          PAGES_MODES.UPDATE,
          PAGES_MODES.DETAIL,
          PAGES_MODES.CREATION
        ]
      },
      {
        [PAGE_RULES_PROPERTIES.STATUS]: [
          null,
          STATUS.ENREGISTREE,
          STATUS.RAPPELEE,
          STATUS.REJETEE
        ]
      },
      { [PAGE_RULES_PROPERTIES.DOUBLE_VALIDATION]: true },
      { [PAGE_RULES_PROPERTIES.CREATOR]: true }
    ],

    buttons: [BUTTONS.SUBMIT_FOR_VALIDATION]
  },
  {
    rule: [
      {
        [PAGE_RULES_PROPERTIES.PAGE_MODE]: [
          PAGES_MODES.UPDATE,
          PAGES_MODES.DETAIL,
          PAGES_MODES.CREATION
        ]
      },
      {
        [PAGE_RULES_PROPERTIES.STATUS]: [
          null,
          STATUS.ENREGISTREE,
          STATUS.RAPPELEE,
          STATUS.REJETEE
        ]
      },
      { [PAGE_RULES_PROPERTIES.DOUBLE_VALIDATION]: false },
      { [PAGE_RULES_PROPERTIES.SIGNATURE]: false },
      { [PAGE_RULES_PROPERTIES.CREATOR]: true }
    ],
    buttons: [BUTTONS.VALIDATE]
  },
  {
    rule: [
      {
        [PAGE_RULES_PROPERTIES.PAGE_MODE]: [PAGES_MODES.DETAIL]
      },
      { [PAGE_RULES_PROPERTIES.STATUS]: STATUS.ENCOURS_VALIDATION },
      { [PAGE_RULES_PROPERTIES.SIGNATURE]: false },
      { [PAGE_RULES_PROPERTIES.VALIDATOR]: true }
    ],
    buttons: [BUTTONS.VALIDATE, BUTTONS.REJECT]
  },
  {
    rule: [
      {
        [PAGE_RULES_PROPERTIES.PAGE_MODE]: [
          PAGES_MODES.CREATION,
          PAGES_MODES.UPDATE
        ]
      },
      { [PAGE_RULES_PROPERTIES.SIGNATURE]: true },
      { [PAGE_RULES_PROPERTIES.DOUBLE_VALIDATION]: false },
      { [PAGE_RULES_PROPERTIES.CREATOR]: true }
    ],
    buttons: [BUTTONS.SUBMIT_FOR_SIGNATURE]
  },
  {
    rule: [
      {
        [PAGE_RULES_PROPERTIES.PAGE_MODE]: [PAGES_MODES.DETAIL]
      },
      {
        [PAGE_RULES_PROPERTIES.STATUS]: [
          STATUS.ENREGISTREE,
          STATUS.RAPPELEE,
          STATUS.REJETEE
        ]
      },
      { [PAGE_RULES_PROPERTIES.SIGNATURE]: true },
      { [PAGE_RULES_PROPERTIES.DOUBLE_VALIDATION]: false },
      { [PAGE_RULES_PROPERTIES.CREATOR]: true }
    ],
    buttons: [BUTTONS.SUBMIT_FOR_SIGNATURE]
  },
  {
    rule: [
      {
        [PAGE_RULES_PROPERTIES.PAGE_MODE]: [PAGES_MODES.DETAIL]
      },
      { [PAGE_RULES_PROPERTIES.SIGNATURE]: true },
      { [PAGE_RULES_PROPERTIES.STATUS]: STATUS.ENCOURS_VALIDATION },
      { [PAGE_RULES_PROPERTIES.VALIDATOR]: true }
    ],
    buttons: [BUTTONS.SUBMIT_FOR_SIGNATURE, BUTTONS.REJECT]
  },
  {
    rule: [
      {
        [PAGE_RULES_PROPERTIES.PAGE_MODE]: [PAGES_MODES.DETAIL]
      },
      { [PAGE_RULES_PROPERTIES.STATUS]: STATUS.ENCOURS_SIGNATURE },
      { [PAGE_RULES_PROPERTIES.SIGNATOR]: true }
    ],
    buttons: [BUTTONS.SIGN, BUTTONS.REJECT]
  },
  // {
  //   rule: [
  //     {
  //       [PAGE_RULES_PROPERTIES.PAGE_MODE]: [PAGES_MODES.DETAIL]
  //     },
  //     {
  //       [PAGE_RULES_PROPERTIES.STATUS]: [
  //         null,
  //         STATUS.ENREGISTREE,
  //         STATUS.RAPPELEE,
  //         STATUS.REJETEE
  //       ]
  //     },
  //     { [PAGE_RULES_PROPERTIES.VALIDATOR]: true }
  //   ],
  //   buttons: [BUTTONS.REJECT]
  // },
  {
    rule: [
      {
        [PAGE_RULES_PROPERTIES.PAGE_MODE]: [PAGES_MODES.DETAIL]
      },
      {
        [PAGE_RULES_PROPERTIES.STATUS]: [
          STATUS.ENREGISTREE,
          STATUS.RAPPELEE,
          STATUS.REJETEE
        ]
      },
      { [PAGE_RULES_PROPERTIES.CREATOR]: true }
    ],
    buttons: [BUTTONS.UPDATE]
  },
  {
    rule: [
      {
        [PAGE_RULES_PROPERTIES.PAGE_MODE]: [PAGES_MODES.DETAIL]
      },
      {
        [PAGE_RULES_PROPERTIES.STATUS]: [
          STATUS.ENREGISTREE,
          STATUS.RAPPELEE,
          STATUS.REJETEE
        ]
      },
      { [PAGE_RULES_PROPERTIES.CREATOR]: true }
    ],
    buttons: [BUTTONS.ABANDON]
  },
  {
    rule: [
      {
        [PAGE_RULES_PROPERTIES.PAGE_MODE]: [PAGES_MODES.DETAIL]
      },
      { [PAGE_RULES_PROPERTIES.STATUS]: STATUS.ENCOURS_VALIDATION },
      { [PAGE_RULES_PROPERTIES.CREATOR]: true }
    ],
    buttons: [BUTTONS.ABANDON]
  },
  {
    rule: [
      {
        [PAGE_RULES_PROPERTIES.PAGE_MODE]: [PAGES_MODES.DETAIL]
      },
      { [PAGE_RULES_PROPERTIES.STATUS]: STATUS.ENCOURS_VALIDATION },
      { [PAGE_RULES_PROPERTIES.VALIDATOR]: true }
    ],
    buttons: [BUTTONS.ABANDON]
  },
  {
    rule: [
      {
        [PAGE_RULES_PROPERTIES.PAGE_MODE]: [PAGES_MODES.DETAIL]
      },
      { [PAGE_RULES_PROPERTIES.STATUS]: STATUS.ENCOURS_SIGNATURE },
      { [PAGE_RULES_PROPERTIES.SIGNATOR]: true }
    ],
    buttons: [BUTTONS.ABANDON]
  },
  {
    rule: [
      {
        [PAGE_RULES_PROPERTIES.PAGE_MODE]: [PAGES_MODES.DETAIL]
      },
      { [PAGE_RULES_PROPERTIES.STATUS]: STATUS.ENCOURS_SIGNATURE },
      { [PAGE_RULES_PROPERTIES.CREATOR]: true }
    ],
    buttons: [BUTTONS.ABANDON]
  },
  {
    rule: [
      {
        [PAGE_RULES_PROPERTIES.PAGE_MODE]: [PAGES_MODES.DETAIL]
      },
      { [PAGE_RULES_PROPERTIES.STATUS]: STATUS.ENCOURS_SIGNATURE },
      { [PAGE_RULES_PROPERTIES.VALIDATOR]: true }
    ],
    buttons: [BUTTONS.ABANDON]
  },
  {
    rule: [
      {
        [PAGE_RULES_PROPERTIES.PAGE_MODE]: [PAGES_MODES.DETAIL]
      },
      {
        [PAGE_RULES_PROPERTIES.STATUS]: [
          STATUS.ENCOURS_SIGNATURE,
          STATUS.ENCOURS_VALIDATION
        ]
      },
      { [PAGE_RULES_PROPERTIES.CREATOR]: true }
    ],
    buttons: [BUTTONS.REMIND]
  },
  {
    rule: [
      {
        [PAGE_RULES_PROPERTIES.PAGE_MODE]: [PAGES_MODES.DETAIL]
      },
      {
        [PAGE_RULES_PROPERTIES.STATUS]: [STATUS.ENCOURS_VALIDATION]
      },
      { [PAGE_RULES_PROPERTIES.CREATOR]: true }
    ],
    buttons: [BUTTONS.REMIND]
  }
];
