import React from 'react';
import FormatAlignRightIcon from '@material-ui/icons/FormatAlignRight';
import FormatAlignJustifyIcon from '@material-ui/icons/FormatAlignJustify';
import FormatAlignCenterIcon from '@material-ui/icons/FormatAlignCenter';
import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';
import LooksOneOutlinedIcon from '@material-ui/icons/LooksOneOutlined';
import LooksTwoOutlinedIcon from '@material-ui/icons/LooksTwoOutlined';
import Looks3OutlinedIcon from '@material-ui/icons/Looks3Outlined';
import Looks4OutlinedIcon from '@material-ui/icons/Looks4Outlined';
import Looks5OutlinedIcon from '@material-ui/icons/Looks5Outlined';
import Looks6OutlinedIcon from '@material-ui/icons/Looks6Outlined';
import FormatQuoteOutlinedIcon from '@material-ui/icons/FormatQuoteOutlined';
import CodeOutlinedIcon from '@material-ui/icons/CodeOutlined';
import FormatListNumberedOutlinedIcon from '@material-ui/icons/FormatListNumberedOutlined';
import FormatListBulletedOutlinedIcon from '@material-ui/icons/FormatListBulletedOutlined';
import BorderAllOutlinedIcon from '@material-ui/icons/BorderAllOutlined';
import BorderBottomOutlinedIcon from '@material-ui/icons/BorderBottomOutlined';
import BorderClearOutlinedIcon from '@material-ui/icons/BorderClearOutlined';
import BorderLeftOutlinedIcon from '@material-ui/icons/BorderLeftOutlined';
import BorderRightOutlinedIcon from '@material-ui/icons/BorderRightOutlined';
import BorderTopOutlinedIcon from '@material-ui/icons/BorderTopOutlined';
import FormatBoldIcon from '@material-ui/icons/FormatBold';
import FormatItalicIcon from '@material-ui/icons/FormatItalic';
import FormatUnderlinedIcon from '@material-ui/icons/FormatUnderlined';
import FormatStrikethroughIcon from '@material-ui/icons/FormatStrikethrough';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import HighlightIcon from '@material-ui/icons/Highlight';
import InsertLinkIcon from '@material-ui/icons/InsertLink';
import CropOriginalIcon from '@material-ui/icons/CropOriginal';
import AssignmentReturnedIcon from '@material-ui/icons/AssignmentReturned';
import Box from "@material-ui/core/Box";
import {
    ToolbarAlign,
    ToolbarMark,
    getSlatePluginType,
    ELEMENT_PARAGRAPH,
    ELEMENT_H1,
    ELEMENT_H2 ,
    ELEMENT_H3,
    ELEMENT_H4 ,
    ELEMENT_H5,
    ELEMENT_H6,
    ELEMENT_BLOCKQUOTE,
    ELEMENT_CODE_BLOCK,
    ELEMENT_CODE_LINE,
    ELEMENT_ALIGN_RIGHT,
    ELEMENT_ALIGN_JUSTIFY,
    ELEMENT_ALIGN_CENTER,
    ELEMENT_UL,
    ELEMENT_OL,
    MARK_BOLD,
    MARK_ITALIC,
    MARK_UNDERLINE,
    MARK_STRIKETHROUGH,
    MARK_CODE,
    MARK_HIGHLIGHT,
    ToolbarCodeBlock,
    ToolbarElement,
    ToolbarList,
    ToolbarLink,
    ToolbarImage,
    insertTable,
    deleteTable,
    addRow,
    deleteRow,
    addColumn,
    deleteColumn,
    ToolbarTable,
    useStoreEditorRef,
    useEventEditorId,
    ELEMENT_MEDIA_EMBED,


} from '@udecode/slate-plugins';

const Toolbar = () => {
    const editor = useStoreEditorRef(useEventEditorId('focus'));

    return (
    <div style={{display:'flex',flexWrap:'wrap',border:'1px solid #00cdbb', borderRadius:'0.5rem'}}>
    <Box p={1} m={1} border={1} borderColor="#00cdbb" borderRadius={4}>
    <ToolbarMark
        type={getSlatePluginType(editor, MARK_BOLD)}
        icon={<FormatBoldIcon />}>
    </ToolbarMark>
    </Box>
    <Box p={1} m={1} border={1} borderColor="#00cdbb" borderRadius={4}>
    <ToolbarMark
        type={getSlatePluginType(editor, MARK_ITALIC)}
        icon={<FormatItalicIcon />}>
    </ToolbarMark>
    </Box>
    <Box p={1} m={1} border={1} borderColor="#00cdbb" borderRadius={4}>
    <ToolbarMark
        type={getSlatePluginType(editor, MARK_UNDERLINE)}
        icon={<FormatUnderlinedIcon />}>
    </ToolbarMark>
    </Box>
    <Box p={1} m={1} border={1} borderColor="#00cdbb" borderRadius={4}>
    <ToolbarMark
        type={getSlatePluginType(editor, MARK_STRIKETHROUGH)}
        icon={<FormatStrikethroughIcon  />}>
    </ToolbarMark>
    </Box>
    <Box p={1} m={1} border={1} borderColor="#00cdbb" borderRadius={4}>
    <ToolbarMark
        type={getSlatePluginType(editor, MARK_HIGHLIGHT)}
        icon={<HighlightIcon  />}>
    </ToolbarMark>
    </Box>
    <Box p={1} m={1} border={1} borderColor="#00cdbb" borderRadius={4}>
    <ToolbarMark
        type={getSlatePluginType(editor, MARK_CODE)}
        icon={<CodeOutlinedIcon  />}>
    </ToolbarMark>
    </Box>
    <Box p={1} m={1} border={1} borderColor="#00cdbb" borderRadius={4}>
    <ToolbarLink
        icon={<InsertLinkIcon  />}>
    </ToolbarLink>
    </Box>
    <Box p={1} m={1} border={1} borderColor="#00cdbb" borderRadius={4}>
    <ToolbarImage
        icon={<CropOriginalIcon  />}
        >
    </ToolbarImage>
    </Box>
    
    <Box p={1} m={1} border={1} borderColor="#00cdbb" borderRadius={4}>
    <ToolbarList
        type={getSlatePluginType(editor, ELEMENT_UL)}
        icon={<FormatListBulletedOutlinedIcon />}>

    </ToolbarList>

    </Box>
    <Box p={1} m={1} border={1} borderColor="#00cdbb" borderRadius={4}>
    <ToolbarList
        type={getSlatePluginType(editor, ELEMENT_OL)}
        icon={<FormatListNumberedOutlinedIcon />}>
    </ToolbarList>
    </Box>


    <Box p={1} m={1} border={1} borderColor="#00cdbb" borderRadius={4}>
    <ToolbarElement
          type={getSlatePluginType(editor, ELEMENT_H1)}
          icon={<LooksOneOutlinedIcon />}
        />
    </Box>
    <Box p={1} m={1} border={1} borderColor="#00cdbb" borderRadius={4}>
    <ToolbarElement
          type={getSlatePluginType(editor, ELEMENT_H2)}
          icon={<LooksTwoOutlinedIcon />}
        />
    </Box> 
    <Box p={1} m={1} border={1} borderColor="#00cdbb" borderRadius={4}>
    <ToolbarElement
          type={getSlatePluginType(editor, ELEMENT_H3)}
          icon={<Looks3OutlinedIcon/>}
        />
    </Box>
    <Box p={1} m={1} border={1} borderColor="#00cdbb" borderRadius={4}>
    <ToolbarElement
          type={getSlatePluginType(editor, ELEMENT_H4)}
          icon={<Looks4OutlinedIcon />}
        />
    </Box> 
    <Box p={1} m={1} border={1} borderColor="#00cdbb" borderRadius={4}>
    <ToolbarElement
          type={getSlatePluginType(editor, ELEMENT_H5)}
          icon={<Looks5OutlinedIcon />}
        />
    </Box>
    <Box p={1} m={1} border={1} borderColor="#00cdbb" borderRadius={4}>
    <ToolbarElement
          type={getSlatePluginType(editor, ELEMENT_H6)}
          icon={<Looks6OutlinedIcon/>}
        />
    </Box> 
    <Box p={1} m={1} border={1} borderColor="#00cdbb" borderRadius={4}>
    <ToolbarElement
          type={getSlatePluginType(editor, ELEMENT_BLOCKQUOTE)}
          icon={<FormatQuoteOutlinedIcon />}
        />
    </Box> 
    <Box p={1} m={1} border={1} borderColor="#00cdbb" borderRadius={4}>
    <ToolbarCodeBlock
          type={getSlatePluginType(editor, ELEMENT_CODE_BLOCK)}
          icon={<CreditCardIcon />}
        />
    </Box> 
    <Box p={1} m={1} border={1} borderColor="#00cdbb" borderRadius={4}>
    <ToolbarAlign icon={<FormatAlignLeftIcon />} />
    </Box>
    <Box p={1} m={1} border={1} borderColor="#00cdbb" borderRadius={4}>
    <ToolbarAlign
        type={getSlatePluginType(editor, ELEMENT_ALIGN_CENTER)}
        icon={<FormatAlignCenterIcon />}
      />
    </Box>
    <Box p={1} m={1} border={1} borderColor="#00cdbb" borderRadius={4}>
    <ToolbarAlign
        type={getSlatePluginType(editor, ELEMENT_ALIGN_RIGHT)}
        icon={<FormatAlignRightIcon />}
      />
    </Box>
    <Box p={1} m={1} border={1} borderColor="#00cdbb" borderRadius={4}>
    <ToolbarAlign
        type={getSlatePluginType(editor, ELEMENT_ALIGN_JUSTIFY)}
        icon={<FormatAlignJustifyIcon />}
      />
    </Box> 
    <Box p={1} m={1} border={1} borderColor="#00cdbb" borderRadius={4}>
    <ToolbarTable icon={<BorderAllOutlinedIcon />} transform={insertTable} />
    </Box>
    <Box p={1} m={1} border={1} borderColor="#00cdbb" borderRadius={4}>
    <ToolbarTable icon={<BorderClearOutlinedIcon />} transform={deleteTable} />
    </Box>
    <Box p={1} m={1} border={1} borderColor="#00cdbb" borderRadius={4}>
    <ToolbarTable icon={<BorderBottomOutlinedIcon />} transform={addRow} />
    </Box>
    <Box p={1} m={1} border={1} borderColor="#00cdbb" borderRadius={4}>
    <ToolbarTable icon={<BorderTopOutlinedIcon  />} transform={deleteRow} />
    </Box>
    <Box p={1} m={1} border={1} borderColor="#00cdbb" borderRadius={4}>
    <ToolbarTable icon={<BorderLeftOutlinedIcon />} transform={addColumn} />
    </Box>
    <Box p={1} m={1} border={1} borderColor="#00cdbb" borderRadius={4}>
    <ToolbarTable icon={<BorderRightOutlinedIcon />} transform={deleteColumn} />
    </Box>
    <Box p={1} m={1} border={1} borderColor="#00cdbb" borderRadius={4}>
    <ToolbarElement
    type={getSlatePluginType(editor,ELEMENT_MEDIA_EMBED)}
    icon={<AssignmentReturnedIcon />}

/>

    </Box>

    </div>
    )
}

export default Toolbar
