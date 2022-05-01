import React,{useMemo} from 'react';
import {
    CodeBlockElement,
    withProps,
    createPlugins,
    isBlockAboveEmpty,
    isSelectionAtBlockStart,
    // createBasicMarkPlugins,
    createHighlightPlugin,
    createLinkPlugin,
    createImagePlugin,
    createMediaEmbedPlugin,
    createSelectOnBackspacePlugin,
    createReactPlugin,
    createHistoryPlugin,
    createParagraphPlugin,
    createBlockquotePlugin,
    createHeadingPlugin,
    createBoldPlugin,
    createItalicPlugin,
    createUnderlinePlugin,
    createStrikethroughPlugin,
    createCodePlugin,
    ELEMENT_IMAGE,
    ELEMENT_MEDIA_EMBED,
    createCodeBlockPlugin,
    createResetNodePlugin,
    
    // optionsSoftBreakPlugin,
    // optionsExitBreakPlugin,
    // createSoftBreakPlugin,
    // createExitBreakPlugin,
    createListPlugin,
    createAlignPlugin,
    createTablePlugin,
    ELEMENT_CODE_BLOCK,
    ELEMENT_BLOCKQUOTE,
    ELEMENT_H1,
    ELEMENT_H2 ,
    ELEMENT_H3,
    ELEMENT_H4 ,
    ELEMENT_H5,
    ELEMENT_H6,
    ELEMENT_CODE_LINE,
    ELEMENT_PARAGRAPH,
    ELEMENT_TH
} from '@udecode/plate'



export const components = createPlugins();
export const styledComponents = {
    ...components,
    [ELEMENT_CODE_BLOCK]: withProps(CodeBlockElement, {
      styles: {
        root: {
          backgroundColor: '#111827',
          selectors: {
            code: {
              color: 'white',
            },
          },
        },
      },
    }) ,


  }




  // export const options = createPluginsOptions();


  export const resetBlockTypesCommonRule = {
    types: [
      ELEMENT_H1,
      ELEMENT_H2 ,
      ELEMENT_H3,
      ELEMENT_H4 ,
      ELEMENT_H5,
      ELEMENT_H6,
      ELEMENT_BLOCKQUOTE,
      ELEMENT_CODE_BLOCK,
      ELEMENT_CODE_LINE,
      ELEMENT_TH

      ],
    defaultType: ELEMENT_PARAGRAPH,
  };

  export const optionsResetBlockTypePlugin = {
    rules: [
      {
        ...resetBlockTypesCommonRule,
        hotkey: 'Enter',
        predicate: isBlockAboveEmpty,
      },
      {
        ...resetBlockTypesCommonRule,
        hotkey: 'Backspace',
        predicate: isSelectionAtBlockStart,
      },
    ],
  };

   
  export const pluginsBasic = [
    // editor
    createReactPlugin(),          // withReact
    createHistoryPlugin(),           // withHistory   
    createAlignPlugin(), 
    createListPlugin(), 
    createResetNodePlugin(optionsResetBlockTypePlugin),
    // createSoftBreakPlugin(optionsSoftBreakPlugin),
    // createExitBreakPlugin(optionsExitBreakPlugin),    
  
    // elements
    createParagraphPlugin(),      // paragraph element
    createBlockquotePlugin(),     // blockquote element
    createCodeBlockPlugin(),      // code block element
    createHeadingPlugin(),        // heading elements
    createTablePlugin(),
    createLinkPlugin(),
    createImagePlugin(),
    createSelectOnBackspacePlugin({ allow: [ELEMENT_IMAGE] }),
    createSelectOnBackspacePlugin({ allow: [ELEMENT_MEDIA_EMBED] }),

    // createExcalidrawPlugin(),

    // marks
    // createBasicMarkPlugins(),
    createBoldPlugin(),           // bold mark
    createItalicPlugin(),         // italic mark
    createUnderlinePlugin(),      // underline mark
    createStrikethroughPlugin(),  // strikethrough mark
    createCodePlugin(),           // code mark
    createHighlightPlugin(),
    createMediaEmbedPlugin()
  
  ];



  export const createElement = (
    text = '',
    {
      type = ELEMENT_PARAGRAPH,
      mark,
    } = {}
  ) => {
    const leaf = { text };
    if (mark) {
      leaf[mark] = true;
    }
  
    return {
      type,
      children: [leaf],
    };
  };

  export const initialValueBasicElements = [

    createElement('Write Something amazing that helps the students and job seekers...', { type: ELEMENT_PARAGRAPH }),
   
  ]
