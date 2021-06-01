FilePond.registerPlugin(
    FilePondPluginImagePreview,
    FilePondPluginImageResize,
    FilePondPluginFileEncode,
)
FilePond.setOptions({
    stylePanelAspectRatio: 150 / 100,
    imageResizetargetWidth: 100,
    imageResizetargetHeight: 150
})

FilePond.parse(document.body);
