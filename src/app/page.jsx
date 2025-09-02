'use client'
import { useRouter } from 'next/navigation'
import styles from './initial/page.module.css'

export default function Home() {
    const router = useRouter()

    const handleProfileRedirect = () => {
        router.push('/home')
    }

    const handleMainRedirect = () => {
        router.push('/home')
    }

    return (
        <div className={styles.loginContainer}>
            <div className={styles.loginCard}>
                <div className={styles.logoSection}>
                    <div className={styles.logoWrapper}>
                        <div className={styles.logoIcon}>🎬</div>
                        <h1 className={styles.mainTitle}>AnimeFlix</h1>
                    </div>
                    <p className={styles.subtitle}>Sua jornada épica começa aqui</p>
                    <p className={styles.description}>Descubra um mundo de aventuras animadas</p>
                </div>

                <div className={styles.buttonSection}>
                    <button
                        onClick={handleProfileRedirect}
                        className={`${styles.btn} ${styles.btnProfile}`}
                    >
                        <span className={styles.btnIcon}>👤</span>
                        <div className={styles.btnContent}>
                            <span className={styles.btnTitle}> ➡️ Sobre Mim</span>
                        </div>
                    </button>

                    <button
                        onClick={handleMainRedirect}
                        className={`${styles.btn} ${styles.btnMain}`}
                    >
                        <span className={styles.btnIcon}>🏠</span>
                        <div className={styles.btnContent}>
                            <span className={styles.btnTitle}> ➡️ Entrar</span>
                        </div>
                    </button>
                </div>

                <div className={styles.footerSection}>
                    <p className={styles.welcomeText}>Bem-vindo ao AnimeFlix</p>
                    <p className={styles.featureList}>
                        ✨ Catálogo exclusivo • 🎯 Recomendações personalizadas • 📱 Multiplataforma
                    </p>
                </div>
            </div>
        </div>
    )
}