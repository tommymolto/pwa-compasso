
        console.log('oi')
        // Verifica se o browser suporta notificações
        if (!("Notification" in window)) {
            alert("Este browser não suporta notificações de Desktop");
        }

        // Se já tem permissão, de um oi!
        else if (Notification.permission === "granted") {
            const notification = new Notification("Bem vindo de volta, notificação!");
        }

        // Senão, pedimos oermissao
        else if (Notification.permission !== 'denied') {
            Notification.requestPermission().then(function (permission) {
                // Se aceitar, exibimos
                if (permission === "granted") {
                    const notification = new Notification("Olá, notificação!");
                }
            });
        }



