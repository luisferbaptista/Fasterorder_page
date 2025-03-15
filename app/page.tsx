import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Globe, Laptop, Zap } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { FadeIn } from "@/components/animations"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <FadeIn className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Soluciones de Software Potentes para tu Negocio
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Nuestro software innovador optimiza tu flujo de trabajo, aumenta la productividad y ayuda a tu
                    negocio a crecer.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="px-4 sm:px-8 transition-transform hover:scale-105">
                    Prueba gratis <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline" className="transition-colors hover:bg-primary/10">
                    Saber más
                  </Button>
                </div>
              </FadeIn>
              <FadeIn delay={300} direction="left" className="flex items-center justify-center">
                <div className="relative aspect-video overflow-hidden rounded-xl border bg-background shadow-lg transition-transform hover:scale-[1.02]">
                  <Image
                    src="/placeholder.svg?height=720&width=1280"
                    width={1280}
                    height={720}
                    alt="Product screenshot"
                    className="object-cover"
                  />
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <FadeIn className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Características
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Todo lo que necesitas para tener éxito
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Nuestro software proporciona todas las herramientas que necesitas para optimizar tu flujo de trabajo y
                  aumentar la productividad.
                </p>
              </div>
            </FadeIn>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              <FadeIn
                delay={150}
                className="flex flex-col items-center space-y-4 rounded-lg border p-6 bg-background transition-transform hover:scale-[1.02]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Súper Rápido</h3>
                <p className="text-center text-muted-foreground">
                  Nuestro software está optimizado para la velocidad, asegurando que tu equipo pueda trabajar
                  eficientemente sin retrasos.
                </p>
              </FadeIn>
              <FadeIn
                delay={300}
                className="flex flex-col items-center space-y-4 rounded-lg border p-6 bg-background transition-transform hover:scale-[1.02]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Basado en la Nube</h3>
                <p className="text-center text-muted-foreground">
                  Accede a tu trabajo desde cualquier lugar con nuestra plataforma segura basada en la nube.
                </p>
              </FadeIn>
              <FadeIn
                delay={450}
                className="flex flex-col items-center space-y-4 rounded-lg border p-6 bg-background transition-transform hover:scale-[1.02]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Laptop className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Multiplataforma</h3>
                <p className="text-center text-muted-foreground">
                  Usa nuestro software en cualquier dispositivo - escritorio, tablet o móvil.
                </p>
              </FadeIn>
            </div>
          </div>
        </section>

        <section id="product" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <FadeIn className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Descubre Nuestro Software</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Conoce más de cerca lo que hace que nuestro software sea la solución perfecta para las necesidades de
                  tu negocio.
                </p>
              </div>
            </FadeIn>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2">
              <FadeIn delay={150} direction="right" className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Panel Intuitivo</h3>
                      <p className="text-sm text-muted-foreground">
                        Obtén una visión completa de tu negocio de un vistazo con nuestro panel personalizable.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Análisis Avanzados</h3>
                      <p className="text-sm text-muted-foreground">
                        Toma decisiones basadas en datos con nuestras potentes herramientas de análisis.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Integración Perfecta</h3>
                      <p className="text-sm text-muted-foreground">
                        Conéctate con tus herramientas y servicios favoritos para un flujo de trabajo unificado.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Informes Automatizados</h3>
                      <p className="text-sm text-muted-foreground">
                        Ahorra tiempo con informes automatizados entregados directamente en tu bandeja de entrada.
                      </p>
                    </div>
                  </li>
                </ul>
                <Button className="w-full sm:w-auto transition-transform hover:scale-105">
                  Probar el software <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </FadeIn>
              <FadeIn delay={300} direction="left" className="flex items-center justify-center">
                <div className="relative aspect-video overflow-hidden rounded-xl border bg-background shadow-lg transition-transform hover:scale-[1.02]">
                  <Image
                    src="/placeholder.svg?height=720&width=1280"
                    width={1280}
                    height={720}
                    alt="Software dashboard"
                    className="object-cover"
                  />
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <FadeIn
                delay={150}
                direction="right"
                className="flex items-center justify-center order-last lg:order-first"
              >
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative aspect-square overflow-hidden rounded-lg transition-transform hover:scale-105">
                    <Image
                      src="/placeholder.svg?height=600&width=600"
                      width={600}
                      height={600}
                      alt="Software interface 1"
                      className="object-cover"
                    />
                  </div>
                  <div className="relative aspect-square overflow-hidden rounded-lg transition-transform hover:scale-105">
                    <Image
                      src="/placeholder.svg?height=600&width=600"
                      width={600}
                      height={600}
                      alt="Software interface 2"
                      className="object-cover"
                    />
                  </div>
                  <div className="relative aspect-square overflow-hidden rounded-lg transition-transform hover:scale-105">
                    <Image
                      src="/placeholder.svg?height=600&width=600"
                      width={600}
                      height={600}
                      alt="Software interface 3"
                      className="object-cover"
                    />
                  </div>
                  <div className="relative aspect-square overflow-hidden rounded-lg transition-transform hover:scale-105">
                    <Image
                      src="/placeholder.svg?height=600&width=600"
                      width={600}
                      height={600}
                      alt="Software interface 4"
                      className="object-cover"
                    />
                  </div>
                </div>
              </FadeIn>
              <FadeIn delay={300} direction="left" className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Diseñado para la productividad</h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Nuestro software está diseñado pensando en la experiencia del usuario, facilitando que tu equipo
                    comience y sea productivo desde el primer día.
                  </p>
                </div>
                <ul className="grid gap-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>Interfaz de usuario intuitiva</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>Flujos de trabajo personalizables</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>Documentación completa</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>Soporte al cliente 24/7</span>
                  </li>
                </ul>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="px-4 sm:px-8 transition-transform hover:scale-105">
                    Prueba gratis <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline" className="transition-colors hover:bg-primary/10">
                    Programar una demo
                  </Button>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <FadeIn className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  ¿Listo para transformar tu negocio?
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Únete a miles de clientes satisfechos que han mejorado su flujo de trabajo con nuestro software.
                </p>
              </div>
              <div className="justify-center flex flex-col w-full max-w-md gap-2 min-[400px]:flex-row">
                <Button
                  size="lg"
                  className="w-full min-[400px]:w-auto px-4 sm:px-8 transition-transform hover:scale-105"
                >
                  Contáctanos
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full min-[400px]:w-auto transition-colors hover:bg-primary/10"
                >
                  Probar Demo
                </Button>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}

