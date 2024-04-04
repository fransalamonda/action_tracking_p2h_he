<template>
  <div class="bg-white py-24 sm:py-32">
    <loader v-if="isLoading" object="#ff9633" color1="#ffffff" color2="#17fd3d" size="5" speed="2" bg="#343a40" objectbg="#999793" opacity="80" name="circular"></loader>
    <div class="p-6  mx-auto bg-white flex items-center space-x-4">
      
      <div class="shrink-0">
        <!-- <svg class="" width="41" height="40" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#a)"><path d="M20.875 40c11.046 0 20-8.954 20-20s-8.954-20-20-20-20 8.954-20 20 8.954 20 20 20Z" fill="#E1F8F0"/><g clip-path="url(#b)" stroke="#00AB6B" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.197 18.622A4.42 4.42 0 0 0 25.62 14.2a4.42 4.42 0 0 0-4.422-4.422 4.42 4.42 0 0 0-4.422 4.422 4.42 4.42 0 0 0 4.422 4.422Zm8.833.845a8.834 8.834 0 0 1-8.833 8.833c0-5.745 3.934-8.833 8.834-8.833Z" fill="#6BDCB2"/><path d="M12.375 19.467a8.834 8.834 0 0 0 8.833 8.833c0-5.745-3.933-8.833-8.833-8.833Z" fill="#6BDCB2"/><path d="M21.208 31.189v-2.9"/></g></g><defs><clipPath id="a"><path fill="#fff" transform="translate(.875)" d="M0 0h40v40H0z"/></clipPath><clipPath id="b"><path fill="#fff" transform="translate(11.708 8.889)" d="M0 0h18.989v22.967H0z"/></clipPath></defs></svg> -->
        
        <svg xmlns="http://www.w3.org/2000/svg"  width="41" height="40" viewBox="0 0 192.756 192.756"><g fill-rule="evenodd" clip-rule="evenodd"><path fill="#fff" d="M0 0h192.756v192.756H0V0z"/><path d="M132.471 70.354a33331.72 33331.72 0 0 1 5.709 38.988c.232 1.571.312 1.742-2.717 2.166-1.545.263-2.213.245-2.869-1.202-2.963-6.646-4.158-9.705-7.332-16.897-.566-1.263-1.35-3.41-1.773-3.323-.418.054-.238 1.301-.121 2.06 1.145 7.762 1.672 11.465 2.861 19.637.148.934-.004 1.092-3.127 1.559-1.93.27-2.605.312-2.9.098-.826.056-1.562-.036-1.723-1.03-.012-.185-.055-1.023-.08-1.226l-.393-2.711c-.041-.27-.09-.563-.115-.84 0-.092-.078-1.188-.078-1.188 0-.056-3.619-24.224-3.699-24.716l-.135-.871c-.074-.496-.166-.943-.244-1.428a9.484 9.484 0 0 1-.168-1.293c-.053-.386-.164-.852-.201-1.208-.055-.221-.115-1.325-.152-1.558-.062-.405-.484-2.355-.504-2.488-.041-.241-.018-.779.123-1.092.215-.473.734-.614 1.043-.657.404-.061.834 0 1.258-.042.127-.038.244-.019.373-.038a11.02 11.02 0 0 0 1.158-.233c.473-.104.98-.221 1.16-.221 1.342-.226 1.666-.024 2.023.284.381.362.459.655.508.949.018.295 1.152 3.52 1.551 4.814 1.729 4.009 3.771 8.701 5.887 13.255.213.614.582 1.509.943 1.465.418-.043.246-1.184.154-1.851-.932-6.309-1.662-11.319-2.662-18.18-.152-.962.012-1.122 2.998-1.527 3.023-.455 3.097-.392 3.244.545zM31.692 141.575h1.272c.212-.013.35-.02.371-.02 0 0 .048 0 .117-.023.055.019.121.03.192.043h.306c.005-.002.009.002.016 0 .116-.02.565-.123.895-.201.497 0 1.018 0 1.417-.021.087-.023.184-.023.245-.023 0 0 1.705-.208 2.103-.393.032 0 .056-.012.092-.049.116 0 1.171-.233 1.171-.233.048 0 1.012-.079 1.509-.104l.895-.1c.473-.049.944-.049 1.404-.152.435-.037.834-.109 1.288-.153.422-.061-.762-.313-.356-.35.08 0 .228-.043.422-.061-.876-.245.429-.577.264-1.271 0 1.135.565 1.367.546 1.099l.902-.742c.017.196-1.128-.951-1.086-.759-1.281-1.068.97-1.363 2.729-1.638h.896c.943-.038 1.853-.08 2.777-.209.517-.087 3.556-.553 3.685-.553.16-.036.958-.079 1.142-.116.287-.024 1.832-.165 2.188-.201 44.936-8.327 62.092-9.658 66.574-10.178l1.201-.172a14.85 14.85 0 0 1-.061-1.116c-.02-.485 14.721-2.319 14.684-2.552-.141-1.342 5.941-2.12 5.562-2.385-.457-.264-.768-.244-1.068-.221-.172.037-16.426 2.336-34.373 4.861-.863-.146-1.938-.25-2.064-.482-.025-.063-3.312.482-3.299.434-4.623.639-3.766.221-6.303.577-.725.122-1.633.122-1.986.626-.117.196-3.968.863-3.932 1.164-17.694 2.502-29.699 4.354-29.846 4.371-.473.044-2.581.191-3.059.216-.167.036-.308.085-.473.085-.545.104-1.072.258-1.618.32-.086.054-.22.078-.374.078l-2.275.295c-.27.005-.497.005-.737.03-.158.019-.9.056-1.036.079-.08 0-.459.02-.534.037-.073 0-1.465.276-1.715.295-.412.062-.89.062-1.295.062h-.692c-.228 0-.405.104-.557.172-.185-.007-.357-.007-.517-.007-.338.05-2.072.381-2.458.461-.424.023-2.544.152-3.024.195-.158.018-.313.068-.454.068-.563.121-1.097.274-1.63.337a2.317 2.317 0 0 1-.362.078l-2.318.264a4.655 4.655 0 0 1-.704.062c-.191.038-.909.062-1.038.062-.085.036-.471.036-.545.062-.066 0-1.478.269-1.704.288-.448.085-.871.085-1.324.085h-.649c-.896-.196-1.595-.699-1.742-1.895 0 0-1.489.313-3.061-.827-1.078-.834.221-1.349-1.882-2.563-1.687-1.012-2.494-2.477-2.494-2.477l.987 4.997s0 .073.036.14c0 .479.012.964.073 1.492.024.311.092.636.165.937l.019.295c.061.221.16.619.16.619.03.109.061.294.061.423.043.203.08.778.097.921.08.466.412 1.911 1.006 2.77.109.124.245.289.362.43.085.111.172.233.264.332.38.483.919.912 1.159.98.238.141.52.245.791.306.238.16.515.319.767.425.183.061.391.079.575.092.216.08.386.121.602.177.193.054.423.086.656.105zm24.266-61.117c-2.986.429-3.144.558-2.986 1.521.995 6.879 1.705 11.864 2.644 18.18.122.667.27 1.833-.153 1.869-.356.043-.737-.858-.945-1.447-2.765-6.057-5.456-12.188-7.394-16.892-.723-1.587-1.042-1.79-3.619-1.441-.361.075-.687.117-.968.172-.178.024-.381.061-.577.061-2.69.417-2.96.546-2.838 1.411 1.423 9.7 3.354 22.9 4.543 31.128.264 1.681.123 3.41-1.754 3.66-1.208.16-1.875-.374-2.262-1.195-.025-.066-.122-.442-.19-.607-.104-.422-.221-.87-.276-1.28-.061-.245-.177-1.693-.183-1.725 0-.078-.092-.435-.118-.532 0-.154-.165-.853-.182-1.03a3.908 3.908 0 0 1-.128-.723l-.344-2.287c-.019-.087-.019-.24-.019-.381-.079-.515-.079-1.055-.134-1.618-.024-.167-.024-.324-.068-.509-.043-.485-.485-2.527-.564-2.962-.042-.368-.158-2.146-.195-2.489a1.406 1.406 0 0 0-.155-.466c.039-.172.08-.356.039-.607 0-.042-.136-.405-.172-.668a8.037 8.037 0 0 1-.319-1.282c-.018-.202-.166-1.674-.166-1.71a15.919 15.919 0 0 0-.109-.546c0-.134-.172-.852-.191-1.012-.08-.257-.104-.466-.141-.723l-.342-2.263c-.019-.134-.019-.264-.019-.405-.073-.508-.073-1.053-.128-1.638-.013-.122-.013-.287-.049-.465-.067-.49-.517-2.55-.559-2.967-.055-.38-.171-2.164-.233-2.527-.062-.293-.111-.558-.491-.949-.367-.295-.674-.448-2.016-.259-.191 0-.699.092-1.184.215-.461.136-.89.213-1.074.252l.16 1.182c1.061 7.278 1.152 7.78 1.264 8.29.043.349.342 1.882.386 2.151.024.184.177.982.203 1.152.005.111.354 3.178.435 3.704.116.901.35 1.79.521 2.741.116.429.306 1.348.306 1.41.257 1.766-.25 2.666-1.256 2.961.203 0 .386-.037.601-.062l-.926.141c.117-.017.228-.061.325-.079-.667.019-1.305-.122-1.759-.92.013.184.024.373.054.417.056.404.147.847.184 1.264.075.422.116.847.191 1.28.066.449.17.932.245 1.412l.141.87c.085.515.276 1.415.288 1.478 0 0 .062 1.079.079 1.188-.018.062-.018.08-.018.093-.073.434.159 2.127.159 2.127.03.056.042.178.066.281.068.363.203.89.312 1.355.025.325.056.798.1.92.018.191.08.361.146.484.014.062.014.104.014.142.012.061.238 1.416.687 2.175.092.191.202.357.318.51.081.203.153.361.258.546.159.208.393.441.57.626.179.232.349.497.541.681.158.209.667.612 1.213.876.152.044.276.08.429.153.172.062.35.172.528.252 1 .33 2.421.294 2.911.214.124-.024.725-.093.902-.109.129-.024.27-.061.43-.061 0 0 .429 0 .631-.044l.288-.02c.325-.017.631-.061.956-.108a17.928 17.928 0 0 0 1.491-.32c.061-.019.141-.019.158-.019l-.018-.035a8.566 8.566 0 0 0 2.312-.976c.134.687.422.742 3.09.337 3.103-.448 3.261-.605 3.12-1.569-1.196-8.154-1.729-11.858-2.875-19.627-.104-.76-.281-2.004.122-2.066.429-.037 1.214 2.066 1.76 3.33 3.207 7.223 4.359 10.258 7.345 16.903.65 1.397 1.324 1.46 2.852 1.215 3.047-.436 2.986-.608 2.739-2.165-2.181-14.93-4.291-29.32-5.7-39-.145-.949-.211-1.01-3.26-.545zm14.139 8.383a18.062 18.062 0 0 1-.17-2.442c-.007-.973.675-2.041 1.754-2.212.165-.043.374 0 .551.056.056.085.153.116.209.184.281.342.332.587.373.9.037.203.112 1.165.172 1.404 0 .024.16.545.16.589.054.435.11.454.158.871-.024.158.007.312.026.465.029.202.257.858.25 1 .024.121.153.526.178.679l.099.798c.185 1.305 1.306 1.232 1.968 1.091l.577-.08c.136 0 .667-.08.803-.08.32-.061 1.668-.306 1.969-.343.17-.043.852-.08 1.017-.104.41-.068.889-.111 1.086-.553.085-.264.158-.539.116-.771-.007-.111-.143-.558-.16-.674-.024-.259-.048-.46-.073-.662-.068-.32-.13-.766-.155-1-.042-.203-.116-1.167-.153-1.343-.005-.104-.097-.449-.104-.527-.013-.172-.013-.388-.061-.62a66.547 66.547 0 0 1-.246-1.226c-.023-.257-.116-1.294-.159-1.484-.024-.172-.178-1.092-.197-1.263-.061-.294-.061-.337-.104-.459-.061-.148-.398-.754-.422-.798-.153-.141-.104-.245-.276-.465-.104-.153-.031-.153-.136-.27-.502-.638-1.465-1.104-1.771-1.227-.196-.081-1.171-.423-1.331-.527-.521-.233-.606-.27-.808-.313-.241-.048-1.65-.245-2.184-.189-.116.037-.541.037-.613.037-.124.042-.711.196-.84.196-.104.018-.492.037-.858.054-.398.063-.761.104-.858.117l-.32.019c-.202.08-.644.185-.644.185-.116.037-.281.08-.393.097-.177 0-.814.104-.919.104-.502.049-1.887.454-2.74 1.043-.134.14-.263.288-.411.392-.129.066-.269.17-.356.282-.483.393-.827.943-.938 1.152-.109.276-.213.546-.311.779-.13.276-.271.545-.381.841a3.131 3.131 0 0 0-.092.57c-.048.208-.123.391-.159.575-.202.859-.042 2.263 0 2.306 0 .129.111.619.111.735.092.49.092 1.557.141 2.208 0 .092.037.189.037.245 0 0 .252 1.717.454 2.122.189.337 1.649 2.863 1.649 2.863l.013-.044c.036.381.619.902.901 1.147.085.092.441.577.508.657.259.281 1.319.992 1.392.992.012 0 .024 0 .024-.043 4.127 4.967 10.233 8.774 10.767 12.374.117.82.178 1.71.264 2.739.037 1.055-.189 2.312-1.809 2.544-1.79.24-2.404-1.004-2.716-3.181-.098-.625-.245-1.729-.374-2.526-.073-.423-1.22-.306-3.599.031-2.373.354-2.894.482-2.826 1.048.099.649.32 2.171.454 2.986l.485-.08c-.049.019-.129.043-.172.061.582-.042 1.104.172 1.275 1.387.037.17.116 1.201.165 1.458l.306 2.104c1.829 2.121 4.691 2.943 7.856 2.466 4.291-.613 5.456-2.142 6.964-6.047.509-1.428.417-3.703.16-5.535-1.431-9.683-13.523-12.857-14.553-19.865zm-2.489 24.193a.623.623 0 0 1 .313-.16c-.104 0-.233.02-.313.02v.14zm21.963-36.922c-.43-.344-1.116-.308-1.791-.165-.351.029-1.921.325-2.258.367a44.66 44.66 0 0 0-1.795.172c-.982.16-1.601.626-1.46 1.526 0 .043.128.388.189.638.092.405.228.841.288 1.264.02.252.141 1.644.16 1.673 0 .08.073.43.085.517.024.141.196.815.208 1.012.068.232.111.466.136.674l3.708 25.426c.037.128.049.252.037.393.075.497.075 1.043.123 1.601.013.147.013.301.049.485.08.466.502 2.506.57 2.898.036.386.153 2.11.228 2.452.029.271.104.583.471.938.363.282.686.485 2.011.221.092 0 .234 0 .388-.056.429-.041.963-.104 1.649-.226.619-.08 1.097-.16 1.482-.203.172 0 .301 0 .437-.018a2 2 0 0 0 .558-.172c.84-.233.84-.485.748-1.012-2.225-15.175-4.408-30.055-5.812-39.67-.047-.405-.109-.675-.409-.735zm20.62.839c.023.16.084.356.121.565l-.121-.565zm2.446 15.72c-.062-.073-.086-.153-.135-.233-.312-.374-.779-.293-1.195-.274-.154.061-.816.201-.951.233-.08 0-.184.182-.287.429-2.221.299-4.508.723-5.127 1.281-.244.185-.129.822.014 1.863.121.951.219 1.546.514 1.749.141.08.424.08.73.08l.049.294c.012.109.379 3.936.404 4.07.043.128.037.846.068 1.049 0 .105.043.275.08.418.104.422.041.482.104.907.006.041.037.575.037.6 0 .239.184 1.171.232 1.423.037.294.092.546-.092.98-.094.172-.229.368-.301.497-.357.485-.863.57-.863.57-.117.019-.254.036-.381.019a.61.61 0 0 1-.301-.062c-.59-.594-.811-1.586-.943-2.525a8867.298 8867.298 0 0 0-3.299-22.458c-.189-1.521-.02-3.439 1.77-3.747 1.625-.233 2.467 1.368 2.576 2.183.092.606.41 2.319.527 3.139.086.674.854.503 2.949.215 1.115-.196 1.906-.337 2.436-.466-.025-.087-.025-.111-.025-.153-.074-.468-.312-2.852-.4-3.391-.064-.546-.611-3.33-.691-4.036-.023-.17-.031-.374-.055-.588-1.674-2.178-4.471-3.582-8.203-3.036-5.66.841-8.015 5.557-7.414 9.663.423 2.944 1.582 10.884 2.521 17.26-.167.718-.595 2.668-.657 2.986-.042.422.184 2.151.184 2.151.024.044.031.123.048.216.129.668.425 1.679.498 2.225.023.062.061.608.086.718.012.036.24 1.465.668 2.227.098.189.201.299.301.546.08.128.172.324.258.502.172.214.393.435.559.662.176.209.342.484.537.675.16.184.639.606 1.209.858.131.041.246.121.381.184.164.042.348.135.51.221.629.245 1.451.307 2.078.307 1.281.448 2.732.558 4.354.301 2.359-.32 3.402-1.361 3.998-2.171.084-.085.156-.185.293-.294.111-.08.545-.424.834-.626.613.485 1.287 2.12 1.82 2.06.43-.067.938.02 1.246-.172.477-.27.373-.932.324-1.201-.596-4.017-2.232-15.236-2.84-19.404-.074-.487-.283-.824-1.037-.924zm41.92 9.78c-1.619.216-4.061.558-5.674.841-.648.062-1.494.134-1.83 0-.326-.143-.48-1.264-.59-2.054-.711-4.74-.607-4.126-1.301-8.873-.141-.767-.332-1.343.16-1.821.221-.109.846-.262 1.465-.361 1.072-.184 2.213-.325 2.678-.386.768-.117.719-.473.34-2.981-.375-2.629-.467-3.01-1.207-2.862-.529.032-1.846.252-2.846.405-.504.049-.895.209-1.355-.024-.533-.332-.51-.988-.578-1.515-.586-4.01-.562-3.869-1.152-7.872-.109-.761-.109-.718.137-1.184.133-.245.834-.393 1.324-.473 1.121-.197 4.354-.631 5.953-.871.777-.148.711-.497.344-3.17-.344-2.323-.43-2.819-1.135-2.697-3.268.49-9.055 1.3-12.35 1.797-.189.029-.373.092-.533.104.473 3.188.988 6.431 1.055 6.959l.295 1.833c.135 1.03.312 2.011.459 2.991.154.919.24 1.761.369 2.68.158.87.287 1.791.43 2.612.049.483.312 2.758.404 3.285.098.805.828 4.948.9 5.181.061.625.154 1.68.061 2.274-.115 1.024-.586 1.104-.857 1.184-.025.062-.078.062-.121.062.457 3.269.979 6.726 1.545 10.565.096.729.109 1.617.648 1.974.467.287 1.459.036 2.422-.087 2.557-.404 8.893-1.342 11.441-1.703.65-.087.674-.337.281-3.065-.405-2.632-.479-2.864-1.182-2.748zm19.263-20.202c.656 4.385 1.25 8.529 2.061 13.943.318 2.189.115 4.513-1.639 6.861-1.594 2.263-4.234 3.255-6.461 3.593-.51.056-1.1.147-1.693.208-.189.466-.668.687-1.324.778-.27.044-1.508.141-1.834.196-.293.037-1.883.35-2.213.393-1.012.185-1.998.214-2.182-.962-.02-.16-.049-1.043-.092-1.201l-.375-2.704c-.072-.301-.092-.582-.115-.858-.025-.124-.094-1.196-.094-1.196 0-.019-.092-.553-.221-1.478-.035-.159-.043-.221-.096-.606-.039-.208-.252-1.472-.277-1.766-.049-.136-.105-.761-.172-1.287-.061-.486-.152-.934-.209-1.405-.08-.448-.16-.914-.189-1.074-.043-.25-.055-.558-.086-.839a13.459 13.459 0 0 1-.141-.743 16.88 16.88 0 0 1-.086-.778c-.117-.779-.24-1.482-.344-2.256-.105-.563-.221-1.213-.238-1.434-.037-.159-.074-.534-.117-.999-.098-.638-.203-1.307-.299-1.962l-.008-.063v-.017c-.688-4.538-1.238-8.259-1.289-8.463l-.109-.844c-.084-.48-.207-.902-.27-1.429-.061-.417-.092-.841-.152-1.215-.086-.484-.146-.888-.209-1.287-.043-.221-.104-1.306-.154-1.514-.066-.405-.482-2.368-.494-2.533-.045-.208-.025-.779.115-1.06.227-.497.76-.608 1.055-.669.416-.061.809-.233 1.207-.293h.381c.166-.036.674.104 1.184-.036.473-.141.998-.204 1.146-.228 1.189-.16 1.594-.031 1.895.165.736-.122 1.396-.183 1.924-.262 2.588-.375 5.297-.063 7.402 1.397.189.128.379.313.545.442l.559 3.721c0 .196.055.356 0 .509.117.669.072 1.368.135 2.085.035.183 0 .386.035.563.08.618.707 3.231.779 3.764.068.485.18 2.76.244 3.158.045.361.156.778.762 1.183-.001-.001.956.618 1.753.502zm-7.675-7.522c-.178-1.264-.406-2.367-1.232-3.189-.578-.404-1.012-.562-2.098-.404-.957.172-1.416.203-1.582.509-.049.08-.074.189-.092.344.018.08.018.141.018.208.025.042.025.104.025.202.023.024.023.043.023.08 1.229 8.56 2.404 16.402 3.607 24.739.25.159.711.301.82.324.191 0 .344-.09.545-.09.057 0 1.152-.075 1.221-.075.129-.018.275-.018.381-.121.227-.141.252-.16.588-.626.424-.528.508-.657.363-1.661 0-.172-.166-1.123-.186-1.331-.043-.202-.072-1.177-.115-1.386-.049-.318-.178-.699-.223-1.055-.043-.129-.066-.84-.084-.993-.039-.344-.449-1.889-.504-2.244-.098-.737-.109-1.479-.221-2.183 0-.117-.129-.871-.152-1.024-.045-.143-.125-.766-.125-.902-.029-.141-.25-.968-.262-1.152-.074-.295-.373-4.298-.361-5.414 0 0 .018-.062.018-.068-.128-.834-.238-1.632-.372-2.488zm11.802-15.795c-.43-2.005-1.705-5.12-3.072-6.12-2.416-1.649-4.691-1.838-6.893-1.477-5.383.882-28.318 4.089-32.686 4.794.109.796-.748.951-.748.951-.41.624-.814.747-1.195.82-.441.039-2.643.185-3.139.252-.533.092-3.139.742-3.74.858-.197.043-.41 0-.582.043-.73.049-1.422.03-2.098.129-.16-.037-.32 0-.477.024l-42.901 3.813c-.16.202-.313.374-.437.594-.146.204-.276.405-.417.577-15.556 2.127-18.485 3.078-18.958 3.219-.362.019-1.895.312-2.182.356-.147.005-.957.177-1.129.202-.117 0-3.183.361-3.666.41-.951.111-1.853.312-2.766.546-.448.087-1.047.257-1.104.276-1.76.233-19.944 1.71-19.944 1.71-.032-.274-1.165.08-1.233.099-.412.042-.706.08-.706.08-.354.085-.863.153-1.14.214 0 0-1.099.049-1.184.073h-.013c-.049-.024-.085-.024-.109-.042-.399-.075-2.117.141-2.117.141-.078.018-.152.018-.257.018-.379.147-.888.259-1.366.375-.32.024-.786.029-.902.054-.221.039-.369.08-.509.179h-.122c-.043.024-1.116.779-1.877 1.225-.184.092-.337.215-.521.313-.177.08-.379.184-.527.252-.228.196-.436.41-.657.613-.208.17-.478.318-.691.502-.18.189-.607.679-.823 1.264-.08.078-.128.213-.172.398-.073.159-.097.827-.073.999.031.141.056.281.043.417 0 0 .012.485.012.662l.061.306c0 .313.049.565.08.939.061.526.502 4.868 1.226 5.959.552-3.097 3.41-3.832 3.434-3.832 0 0 1.116-2.459 1.092-2.906-.024-.466.944-1.999 1.771-2.367.099-.036.441-.121.632-.177.429-.124.852-.245 1.281-.32a53.445 53.445 0 0 1 1.705-.178c.116 0 .471-.061.558-.061.128-.043.858-.165.999-.184a2.99 2.99 0 0 1 .73-.141l2.268-.332c.141-.024.301-.042.386-.024.534-.092 1.099-.092 1.656-.146.134 0 .294 0 .459-.024.485-.062 2.576-.498 2.986-.577.375-.02 2.154-.141 2.484-.221.172 0 .319-.043.502-.105.172.044.345.062.577.044.037 0 .466-.143.667-.216.429-.097.834-.221 1.283-.293.238-.02 1.654-.129 1.741-.129.061-.043.435-.123.502-.123.141 0 .864-.141 1.031-.202.226-.048.471-.067.716-.111l2.287-.361h.374c.552-.085 1.074-.085 1.661-.166h.456c.502-.08 2.562-.502 2.991-.564 2.214-.313 83.526-11.061 81.907-10.804-.295.02.631-.165.988-.514.092-.136.164-.202-.959-.289l28.23-3.525c4.916-2.299 9.602-.429 11.943 1.791 1.582-.758 2.305.617 2.373.04z" fill="#953839"/></g></svg>
      </div>

      <div>
        <div class="text-xl font-medium text-black">Unassigned</div>
        <!-- <p class="text-slate-500">You have a new message!: {{ datakirim }}</p> -->
      </div>

    </div>
    
    <!-- <div class="mx-auto max-w-7xl px-6 lg:px-1 overflow-x-auto"> -->
    <!-- <div class="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-1 lg:mx-0 lg:flex lg:max-w-none"> -->
<!-- Modal toggle -->


      <div class="p-8 overflow-x-auto">
      <!-- <div class="relative overflow-x-auto"> -->
        <!-- <table class=" text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"> -->
          <table class="min-w-full border border-neutral-200 text-center text-sm font-light text-surface dark:border-white/10 dark:text-white">
              
              <thead class="text-xs text-green-600  font-mono	 uppercase bg-gray-50 dark:bg-gray-600 dark:text-gray-400">
                <!-- <thead class="border-b border-neutral-200 font-medium text-green-600 dark:border-white/10">                 -->
                  
                <tr>
                    <th class="border border-slate-300">Doc Unit</th>
                    <th class="border border-slate-300 w-fit">Equipment ERP</th>
                    <th class="w-fit">Shift</th>
                    <th class="w-fit">Date</th>
                    <th class="w-fit">Kode Unit</th>
                    <th class="w-fit">Nama Unit</th>
                    <th class="w-fit">Merk</th>
                    <th class="w-fit">Group HE</th>
                    <th class="w-fit">Nama Checkpoint</th>
                    <th class="w-fit">Catatan Checkpoint</th>
                    <th class="w-max">Sction</th>
                  </tr>
              </thead>
              <tbody>
                  <!-- <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 font-mono" v-for="item in barang" :key="item.equipment_id"> -->
                    <tr class="" v-for="item in barang" :key="item.equipment_id">
                    <td class="p-2 border-b border-l text-left">{{ item.equipment_id }}</td>
                    <td class="py-2 border-b border-l font-medium whitespace-nowrap text-gray-900  dark:text-white text-left">{{ item.checkpoint }}</td>
                    <td class="py-2 border-b border-l font-medium whitespace-nowrap text-sm text-gray-800 dark:text-gray-200 text-left">{{ item.checkpoint_detail }}</td>
                    <td class="hover:flex-row py-2 border-b border-l font-medium text-gray-900 whitespace-nowrap dark:text-white text-left">{{ item.checklist_notes }}</td>
                    <td class="hover:flex-row py-2 border-b border-l font-medium text-gray-900 whitespace-nowrap dark:text-white text-left">{{ item.conditions }}</td>
                    <td class="py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-left"></td>
                    <td class="py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-left"></td>
                    <td class="py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-left"></td>
                    <td class="py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-left"></td>
                    <td class="py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-left"></td>
                    <td class="px-6 py-4">
                        <!-- <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline" v-on:click="klikTabel">Action</a> -->
                        <button type="button" class="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto" @click="showModal = true" >Action</button>
                    </td>
                  </tr>
                  
              </tbody>
          </table>

      <!-- </div> -->
      <!-- </div> -->
      </div>

  </div>

  <div v-if="showModal" class="modal fixed left-0 top-0 z-50 w-full flex items-center justify-center bg-gray-500 bg-opacity-75">

  <!-- <div class="bg-white p-8 rounded shadow-md  max-w-lg"> -->

  <div class="bg-white mdi-video-wireless-outline p-6 rounded-lg">
  <!-- Modal Header -->
    <div class="mb-4">
    <h2 class="text-xl font-bold">Action Form</h2>
    <p>Complete Form to Update this case</p>
    </div>

    <div class="mb-12 overflow-auto">
      <caption class="caption-top">
      Table 3.1: Professional wrestlers and their signature moves.
    </caption>
    
      <div class="grid grid-cols-3 divide-x ">
        <div class="shadow-md ">
          

          <form class="max-w-md mx-auto">
            <div class="relative z-0 w-full mb-5 group">
              
              <input type="text" name="docno" id="docno" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />

                <label for="docno" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Doc No</label>
            </div>

            <div class="relative z-0 w-full mb-5 group">
                <input type="text" name="date_act" id="date_act" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />

                <label for="date_act" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Date</label>
            </div>
            
            <div class="grid md:grid-cols-2 md:gap-6">
              <div class="relative z-0 w-full mb-5 group">
                  <input type="text" name="kd_unit" id="kd_unit" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                  <label for="kd_unit" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Kode Unit</label>
              </div>
              <div class="relative z-0 w-full mb-5 group">
                  <input type="text" name="nm_unit" id="nm_unit" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                  <label for="nm_unit" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nama Unit</label>
              </div>
            </div>

            <div class="grid md:grid-cols-2 md:gap-6">
              <div class="relative z-0 w-full mb-5 group">
                  <input type="text" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="model_unit" id="model_unit" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                  <label for="model_unit" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Model</label>
              </div>
              <div class="relative z-0 w-full mb-5 group">
                  <input type="text" name="seri_unit" id="seri_unit" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                  <label for="seri_unit" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Seri</label>
              </div>
            </div>

            <div class="relative z-0 w-full mb-5 group">
                <input type="text" name="merk_unit" id="merk_unit" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />

                <label for="merk_unit" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Merk</label>
            </div>
            
          </form>


        </div>

        <div class="shadow-md">02</div>
        <div class="shadow-md">03</div>
      </div>

    </div>

  <!-- Modal Footer -->
  <div>
  <button @click="showModal = false" class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
    Close
  </button>
  <button class="bg-red-900 hover:bg-red-950 text-white font-bold py-2 px-4 rounded ml-2">
    Action
  </button>
  </div>

  </div>

  <!-- </div> -->

  </div>

<div class="flex flex-wrap mt-4">
  
  <div class="w-full mb-12 px-4">
  

    <!-- Modal -->
      

        <!-- Main modal -->
    <TransitionRoot as="template" :show="open">
      <Dialog as="div" class="relative z-10" @close="open = false">
        <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
          <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </TransitionChild>

        <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
              <DialogPanel class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div class="sm:flex sm:items-start">
                    <div class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                      <ExclamationTriangleIcon class="h-6 w-6 text-red-600" aria-hidden="true" />
                    </div>
                    <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <DialogTitle as="h3" class="text-base font-semibold leading-6 text-gray-900">Action Form</DialogTitle>
                      <div class="mt-2">
                        <!-- <p class="text-sm text-gray-500">Are you sure you want to deactivate your account? All of your data will be permanently removed. This action cannot be undone.</p> -->
                        <form>
                          <div class="space-y-12">
                            <div class="border-b border-gray-900/10 pb-12">
                              <h2 class="text-base font-semibold leading-7 text-gray-900"></h2>
                              <p class="mt-1 text-sm leading-6 text-gray-600">Complete form to update this case</p>

                              <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div class="sm:col-span-4">
                                  <label for="username" class="block text-sm font-medium leading-6 text-gray-900">Username</label>
                                  <div class="mt-2">
                                    <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                      <span class="flex select-none items-center pl-3 text-gray-500 sm:text-sm">workcation.com/</span>
                                      <input type="text" name="username" id="username" autocomplete="username" class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="janesmith">
                                    </div>
                                  </div>
                                </div>

                                <div class="col-span-full">
                                  <label for="about" class="block text-sm font-medium leading-6 text-gray-900">About</label>
                                  <div class="mt-2">
                                    <textarea id="about" name="about" rows="3" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
                                  </div>
                                  <p class="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about yourself.</p>
                                </div>

                                <div class="col-span-full">
                                  <label for="photo" class="block text-sm font-medium leading-6 text-gray-900">Photo</label>
                                  <div class="mt-2 flex items-center gap-x-3">
                                    <svg class="h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                      <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clip-rule="evenodd" />
                                    </svg>
                                    <button type="button" class="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">Change</button>
                                  </div>
                                </div>

                                <div class="col-span-full">
                                  <label for="cover-photo" class="block text-sm font-medium leading-6 text-gray-900">Cover photo</label>
                                  <div class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                    <div class="text-center">
                                      <svg class="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clip-rule="evenodd" />
                                      </svg>
                                      <div class="mt-4 flex text-sm leading-6 text-gray-600">
                                        <label for="file-upload" class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                                          <span>Upload a file</span>
                                          <input id="file-upload" name="file-upload" type="file" class="sr-only">
                                        </label>
                                        <p class="pl-1">or drag and drop</p>
                                      </div>
                                      <p class="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div class="border-b border-gray-900/10 pb-12">
                              <h2 class="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
                              <p class="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>

                              <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div class="sm:col-span-3">
                                  <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">First name</label>
                                  <div class="mt-2">
                                    <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                  </div>
                                </div>

                                <div class="sm:col-span-3">
                                  <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900">Last name</label>
                                  <div class="mt-2">
                                    <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                  </div>
                                </div>

                                <div class="sm:col-span-4">
                                  <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                                  <div class="mt-2">
                                    <input id="email" name="email" type="email" autocomplete="email" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                  </div>
                                </div>

                                <div class="sm:col-span-3">
                                  <label for="country" class="block text-sm font-medium leading-6 text-gray-900">Country</label>
                                  <div class="mt-2">
                                    <select id="country" name="country" autocomplete="country-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                                      <option>United States</option>
                                      <option>Canada</option>
                                      <option>Mexico</option>
                                    </select>
                                  </div>
                                </div>

                                <div class="col-span-full">
                                  <label for="street-address" class="block text-sm font-medium leading-6 text-gray-900">Street address</label>
                                  <div class="mt-2">
                                    <input type="text" name="street-address" id="street-address" autocomplete="street-address" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                  </div>
                                </div>

                                <div class="sm:col-span-2 sm:col-start-1">
                                  <label for="city" class="block text-sm font-medium leading-6 text-gray-900">City</label>
                                  <div class="mt-2">
                                    <input type="text" name="city" id="city" autocomplete="address-level2" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                  </div>
                                </div>

                                <div class="sm:col-span-2">
                                  <label for="region" class="block text-sm font-medium leading-6 text-gray-900">State / Province</label>
                                  <div class="mt-2">
                                    <input type="text" name="region" id="region" autocomplete="address-level1" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                  </div>
                                </div>

                                <div class="sm:col-span-2">
                                  <label for="postal-code" class="block text-sm font-medium leading-6 text-gray-900">ZIP / Postal code</label>
                                  <div class="mt-2">
                                    <input type="text" name="postal-code" id="postal-code" autocomplete="postal-code" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div class="border-b border-gray-900/10 pb-12">
                              <h2 class="text-base font-semibold leading-7 text-gray-900">Notifications</h2>
                              <p class="mt-1 text-sm leading-6 text-gray-600">We'll always let you know about important changes, but you pick what else you want to hear about.</p>

                              <div class="mt-10 space-y-10">
                                <fieldset>
                                  <legend class="text-sm font-semibold leading-6 text-gray-900">By Email</legend>
                                  <div class="mt-6 space-y-6">
                                    <div class="relative flex gap-x-3">
                                      <div class="flex h-6 items-center">
                                        <input id="comments" name="comments" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600">
                                      </div>
                                      <div class="text-sm leading-6">
                                        <label for="comments" class="font-medium text-gray-900">Comments</label>
                                        <p class="text-gray-500">Get notified when someones posts a comment on a posting.</p>
                                      </div>
                                    </div>
                                    <div class="relative flex gap-x-3">
                                      <div class="flex h-6 items-center">
                                        <input id="candidates" name="candidates" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600">
                                      </div>
                                      <div class="text-sm leading-6">
                                        <label for="candidates" class="font-medium text-gray-900">Candidates</label>
                                        <p class="text-gray-500">Get notified when a candidate applies for a job.</p>
                                      </div>
                                    </div>
                                    <div class="relative flex gap-x-3">
                                      <div class="flex h-6 items-center">
                                        <input id="offers" name="offers" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600">
                                      </div>
                                      <div class="text-sm leading-6">
                                        <label for="offers" class="font-medium text-gray-900">Offers</label>
                                        <p class="text-gray-500">Get notified when a candidate accepts or rejects an offer.</p>
                                      </div>
                                    </div>
                                  </div>
                                </fieldset>
                                <fieldset>
                                  <legend class="text-sm font-semibold leading-6 text-gray-900">Push Notifications</legend>
                                  <p class="mt-1 text-sm leading-6 text-gray-600">These are delivered via SMS to your mobile phone.</p>
                                  <div class="mt-6 space-y-6">
                                    <div class="flex items-center gap-x-3">
                                      <input id="push-everything" name="push-notifications" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600">
                                      <label for="push-everything" class="block text-sm font-medium leading-6 text-gray-900">Everything</label>
                                    </div>
                                    <div class="flex items-center gap-x-3">
                                      <input id="push-email" name="push-notifications" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600">
                                      <label for="push-email" class="block text-sm font-medium leading-6 text-gray-900">Same as email</label>
                                    </div>
                                    <div class="flex items-center gap-x-3">
                                      <input id="push-nothing" name="push-notifications" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600">
                                      <label for="push-nothing" class="block text-sm font-medium leading-6 text-gray-900">No push notifications</label>
                                    </div>
                                  </div>
                                </fieldset>
                              </div>
                            </div>
                          </div>

                          <div class="mt-6 flex items-center justify-end gap-x-6">
                            <button type="button" class="text-sm font-semibold leading-6 text-gray-900">Cancel</button>
                            <button type="submit" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
                          </div>
                        </form>

                      </div>
                    </div>
                  </div>
                </div>
                <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button type="button" class="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto" @click="open = false">Ok</button>
                  <!-- <button type="button" class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto" @click="open = false" ref="cancelButtonRef">Cancel</button> -->
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>

  </div>
  
</div>

  </template>
  <script>
  //import ServiceSetupLarge from "@/components/ServiceSelectLarge.vue"
  import UserService from "@/services/user.service";
  import { Dialog, TransitionRoot, TransitionChild } from '@headlessui/vue';

  export default {
    name: "dashboard-page",
    components: {
      Dialog,
      TransitionRoot,
      TransitionChild,
      //ServiceSetupLarge
    },
    data: () => ({
      files: [],
      namauser:'',
      barang: [],
      tokenjwt:'',
      open: false,
      showModal: false,

      nm_supplier:'',
      datakirim:'',
      isLoading: false
    }),

    props: ['customProp'],
    watch: {
      customProp(newIDplant) {
        //console.log('Perubahan props:', newVal);
        this.datakirim = newIDplant;
        // Lakukan sesuatu ketika nilai props berubah
        UserService.getUnassigned(newIDplant).then(
        (response) => {
        this.barang = response.data.result;
        this.isLoading = false;
        },
        (error) => {
        this.plant =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
          this.isLoading = false;
        }
        );
      }
    },
    
    methods: {
      handleFileChange(event) {
        this.files = Array.from(event.target.files);
      },
      removeFile(index) {
        this.files.splice(index, 1);
      },
      
      klikTabel(){
        this.open = true;
      }
    },
    computed: {
    
    },
    mounted () {
      
      this.datakirim =this.customProp;
      UserService.getUnassigned(this.customProp).then(
      (response) => {
        this.barang = response.data.result;
        this.isLoading = false;
      },
      (error) => {
        this.plant =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
          this.isLoading = false;
      }
      );
    }
  };
  </script>
  