
        console.log('oi')
        // Verifica se o browser suporta notificações
        if (!("Notification" in window)) {
            alert("Este browser não suporta notificações de Desktop");
        }

        // Se já tem permissão, de um oi!
        else if (Notification.permission === "granted") {
            const notification = new Notification( "Olá",{
                body: "Bem vindo de volta, notificação!",
                icon: "https://s3.amazonaws.com/gupy5/production/companies/417/career/410/images/logo.jpg"
            });
        }

        // Senão, pedimos oermissao
        else if (Notification.permission !== 'denied') {
            Notification.requestPermission().then(function (permission) {
                // Se aceitar, exibimos
                if (permission === "granted") {
                    const notification = new Notification("Olá",{
                        body: "Olá, notificação!",
                        icon: "https://s3.amazonaws.com/gupy5/production/companies/417/career/410/images/logo.jpg"
                    });
                }
            });
        }



