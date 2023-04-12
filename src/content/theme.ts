import { EditorThemeClasses } from 'lexical'
import * as styles from './styles.css'

export const theme: EditorThemeClasses = {
  code: styles.codeBlock,
  codeHighlight: {
    atrule: styles.tokenAttr,
    attr: styles.tokenAttr,
    boolean: styles.tokenProperty,
    builtin: styles.tokenSelector,
    cdata: styles.tokenComment,
    char: styles.tokenSelector,
    class: styles.tokenFunction,
    'class-name': styles.tokenFunction,
    comment: styles.tokenComment,
    constant: styles.tokenProperty,
    deleted: styles.tokenProperty,
    doctype: styles.tokenComment,
    entity: styles.tokenOperator,
    function: styles.tokenFunction,
    important: styles.tokenVariable,
    inserted: styles.tokenSelector,
    keyword: styles.tokenAttr,
    namespace: styles.tokenVariable,
    number: styles.tokenProperty,
    operator: styles.tokenOperator,
    prolog: styles.tokenComment,
    property: styles.tokenProperty,
    punctuation: styles.tokenPunctuation,
    regex: styles.tokenVariable,
    selector: styles.tokenSelector,
    string: styles.tokenSelector,
    symbol: styles.tokenProperty,
    tag: styles.tokenProperty,
    url: styles.tokenOperator,
    variable: styles.tokenVariable,
  },
  text: {
    bold: styles.bold,
    code: styles.code,
    italic: styles.italic,
    strikethrough: styles.strikethrough,
    subscript: styles.subscript,
    superscript: styles.superscript,
    underline: styles.underline,
    underlineStrikethrough: styles.underlineStrikethrough,
  },

  list: {
    nested: {
      listitem: styles.nestedListItem,
    },
  },

  admonition: {
    danger: styles.danger,
    info: styles.info,
    note: styles.note,
    tip: styles.tip,
    caution: styles.caution,
  },
}
